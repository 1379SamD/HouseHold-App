import { Grid, Paper } from '@mui/material'
import React from 'react'
import MonthSelector from '../components/MonthSelector.tsx';
import CategoryChart from '../components/CategoryChart.tsx';
import TransactionTable from '../components/TransactionTable.tsx';
import BarChart from '../components/BarChart.tsx';
import { Transaction } from '../types/index.ts';

interface ReportProps {
  currentMonth: Date,
  setCurrentMonth: React.Dispatch<React.SetStateAction<Date>>,
  monthlyTransactions: Transaction[],
  isLoading: boolean,
}

const Report = ({currentMonth, setCurrentMonth, monthlyTransactions, isLoading}:ReportProps) => {

  const commonPaperStayle = {
    height: "400px",
    display: "flex",
    flexDirection: "column",
    p: 2,
  };
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        {/* 日付選択エリア */}
        <MonthSelector currentMonth={currentMonth} setCurrentMonth={setCurrentMonth}/>
      </Grid>
      <Grid item xs={12} md={4}>
        <Paper sx={commonPaperStayle}><CategoryChart monthlyTransactions={monthlyTransactions} isLoading={isLoading}/></Paper>
      </Grid>
      <Grid item xs={12} md={8}>
        <Paper sx={commonPaperStayle}><BarChart monthlyTransactions={monthlyTransactions} isLoading={isLoading}/></Paper>
      </Grid>
      <Grid item xs={12}>
        <TransactionTable monthlyTransactions={monthlyTransactions}/>
      </Grid>
    </Grid>
  );
};

export default Report