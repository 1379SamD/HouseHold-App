import { Box } from '@mui/material';
import React, { useState } from 'react';
import MonthlySummary from '../components/MonthlySummary.tsx';
import Calendar from "../components/Calendar.tsx";
import TransactionMenu from "../components/TransactionMenu.tsx";
import TransactionForm from "../components/TransactionForm.tsx";
import { Transaction } from "../types";
import { format } from 'date-fns';
import { Schema } from '../validations/schema.ts';

interface HomeProps {
  monthlyTransactions: Transaction[];
  setCurrentMonth: React.Dispatch<React.SetStateAction<Date>>;
  onSaveTransaction: (transaction: Schema) => Promise<void>;
  onDeleteTransaction: (transactionId: string) => Promise<void>;
  onUpdateTransaction: (transaction: Schema, transactionId: string) => Promise<void>
}

const Home = ({
  monthlyTransactions, 
  setCurrentMonth, 
  onSaveTransaction,
  onDeleteTransaction,
  onUpdateTransaction,
}: HomeProps) => {
  // 今日の日付を取得
  const today = format(new Date(), "yyyy-MM-dd");
  // console.log(today)
  const[currentDay, setCurrentDay] = useState(today);
  const[isEntryDrawerOpen, setIsEntryDrawerOpen] = useState(false);
  const [selectedTransaction, setSelectedTransaction] = useState<Transaction | null>(null);
  
  // 1日分のデータを取得
  const dailyTransactions = monthlyTransactions.filter((transaction) => {
    return transaction.date === currentDay;
  })
  // console.log(dailyTransactions);

  const CloseForm = () => {
    setIsEntryDrawerOpen(!isEntryDrawerOpen);
    setSelectedTransaction(null);
  }

  // フォームの開閉処理
  const handleAddTransactionForm = () => {
    if(selectedTransaction) {
      setSelectedTransaction(null);
    } else {
      setIsEntryDrawerOpen(!isEntryDrawerOpen);
    }
  };

  // 取り引きが選択された時の処理
  const handleSelectTransaction = (transaction: Transaction) => {
    setIsEntryDrawerOpen(true);
    // console.log(transaction);
    setSelectedTransaction(transaction);
  }

  return (
    <Box sx={{display: "flex"}}>
      {/* 左側コンテンツ */}
      <Box sx={{flexGrow: 1}}>
        <MonthlySummary monthlyTransactions={monthlyTransactions}/>
        <Calendar 
        monthlyTransactions={monthlyTransactions} 
        setCurrentMonth={setCurrentMonth} 
        setCurrentDay={setCurrentDay} 
        currentDay={currentDay}
        today={today}/>
      </Box>

      {/* 右側コンテンツ */}
      <Box>
        <TransactionMenu 
        dailyTransactions={dailyTransactions} 
        currentDay={currentDay} 
        onhandleAddTransactionForm={handleAddTransactionForm}
        onSelectTransaction={handleSelectTransaction}
      />
      <TransactionForm 
        onCloseForm={CloseForm} 
        isEntryDrawerOpen={isEntryDrawerOpen}
        currentDay={currentDay}
        onSaveTransaction={onSaveTransaction}
        selectedTransaction={selectedTransaction}
        onDeleteTransaction={onDeleteTransaction}
        setSelectedTransaction={setSelectedTransaction}
        onUpdateTransaction={onUpdateTransaction}
        />
      </Box>

    </Box>
  )
}

export default Home