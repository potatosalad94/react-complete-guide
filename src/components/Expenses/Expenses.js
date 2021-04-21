import React, { useState } from 'react';

import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';
import Card from '../UI/Card';
import './Expenses.css';

const Expenses = (props) => {
  const [pickedYear, setYear] = useState('2022');

  const handleSelectedYear = (selectedYear) => {
    setYear(selectedYear);
  };

  const filteredExpenses = props.items.filter(expense => {
    return (
      expense.date.getFullYear().toString() === pickedYear
    )
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter onSelectedYear={handleSelectedYear} selected={pickedYear} />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
}

export default Expenses;
