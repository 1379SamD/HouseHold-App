import React, { JSX } from 'react'
import FastfoodIcon from "@mui/icons-material/Fastfood";
import { ExpenseCategory, IncomeCategory } from '../../types/index.ts';
import { AddBusinessOutlined, AddHomeOutlined, AlarmOutlined, Diversity3Outlined, SavingsOutlined, SportsTennisOutlined, TrainOutlined, WorkOutlineOutlined } from '@mui/icons-material';

const IconComponents: Record<IncomeCategory | ExpenseCategory, JSX.Element> = {
  食費: <FastfoodIcon fontSize='small'/>,
  日用品: <AlarmOutlined fontSize='small'/>,
  住居費: <AddHomeOutlined fontSize='small'/>,
  交際費: <Diversity3Outlined fontSize='small'/>,
  娯楽: <SportsTennisOutlined fontSize='small'/>,
  交通費: <TrainOutlined fontSize='small'/>,
  給与: <WorkOutlineOutlined fontSize='small'/>,
  副収入: <AddBusinessOutlined fontSize='small'/>,
  お小遣い: <SavingsOutlined fontSize='small'/>,
};

export default IconComponents