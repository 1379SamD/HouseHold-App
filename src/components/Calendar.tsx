import React from 'react'
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import jaLocale from '@fullcalendar/core/locales/ja';
import "../calendar.css";
import { DatesSetArg, EventContentArg } from '@fullcalendar/core/index.js';
import { Balance, CalendarContent, Transaction } from '../types';
import { calculateDailyBalances } from '../utils/financeCalculations.ts';
import { formatCurrency } from '../utils/formatting.ts';
import interactionPlugin, { DateClickArg } from '@fullcalendar/interaction';
import { useTheme } from '@mui/material';
import { isSameMonth } from 'date-fns';

interface CalenderProps {
  monthlyTransactions: Transaction[],
  setCurrentMonth: React.Dispatch<React.SetStateAction<Date>>,
  setCurrentDay: React.Dispatch<React.SetStateAction<string>>,
  currentDay: string,
  today: string,
}

const Calendar = ({monthlyTransactions, setCurrentMonth, setCurrentDay, currentDay, today}: CalenderProps) => {
  // console.log(monthlyTransactions);
  const theme = useTheme();

  const events = [
    { title: 'Meeting', start: new Date() },
    { title: 'hello', start: new Date(), income: 0, expense: 2000, balance:1000 },
  ]

  const renderEventContent = (eventInfo: EventContentArg) => {
    // console.log(eventInfo);
    return (
      <div>
        <div className="money" id="event-income">
          {eventInfo.event.extendedProps.income}
        </div>
        <div className="money" id="event-expense">
          {eventInfo.event.extendedProps.expense}
        </div>
        <div className="money" id="event-balance">
          {eventInfo.event.extendedProps.balance}
        </div>
      </div>
    )
  }

  
  const dailyBalances = calculateDailyBalances(monthlyTransactions)
  // console.log(dailyBalances);
  
  // 2.FullCalendar用のイベントを生成する関数📅
  const createCalendarEvent = (dailyBalances: Record<string, Balance>):CalendarContent[] => {
    return Object.keys(dailyBalances).map((date) => {
      const {income, expense, balance} = dailyBalances[date]
      return {
        start: date,
        income: formatCurrency(income),
        expense: formatCurrency(expense),
        balance: formatCurrency(balance),
      }
    })
  }

  const calendarEvents = createCalendarEvent(dailyBalances)
  // console.log(calendarEvents);

  const backgroundEvent = {
    start: currentDay,
    display: "background",
    backgroundColor: theme.palette.incomeColor.light,
  };

  // console.log([...calendarEvents, backgroundEvent]);

  const handleDateSet = (datesetInfo:DatesSetArg) => {
    // console.log(datesetInfo);
    const currentMonth = datesetInfo.view.currentStart;
    setCurrentMonth(currentMonth);
    const todayDate = new Date();
    if(isSameMonth(todayDate, currentMonth)) {
      setCurrentDay(today);
    };
  };

  const handleDateClick = (dateInfo: DateClickArg) => {
    // console.log(dateInfo);
    setCurrentDay(dateInfo.dateStr);
  };

  return (
    <FullCalendar
      locale={jaLocale}
      plugins={[dayGridPlugin, interactionPlugin]}
      initialView='dayGridMonth'
      events={[...calendarEvents, backgroundEvent]}
      eventContent={renderEventContent}
      datesSet={handleDateSet}
      dateClick={handleDateClick}
    />
  )
}

export default Calendar