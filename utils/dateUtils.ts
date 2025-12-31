import { MonthData } from '../types';

export const getBookingMonths = (): MonthData => {
  const date = new Date();
  
  // Get current month name
  const current = date.toLocaleString('default', { month: 'long' });
  
  // Calculate next month
  const nextMonthDate = new Date(date.getFullYear(), date.getMonth() + 1, 1);
  const next = nextMonthDate.toLocaleString('default', { month: 'long' });

  return { current, next };
};