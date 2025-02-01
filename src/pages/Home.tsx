import { Box } from '@mui/material';
import React from 'react';
import MonthlySummary from '../components/MonthlySummary.tsx';
import Calendar from "../components/Calendar.tsx";
import TransactionMenu from "../components/TransactionMenu.tsx";
import TransactionForm from "../components/TransactionForm.tsx";

const Home = () => {
  return (
    <Box sx={{display: "flex"}}>
      {/* 左側コンテンツ */}
      <Box sx={{flexGrow: 1}}>
        <MonthlySummary />
        <Calendar />
      </Box>

      {/* 右側コンテンツ */}
      <Box>
        <TransactionMenu/>
        <TransactionForm/>
      </Box>

    </Box>
  )
}

export default Home