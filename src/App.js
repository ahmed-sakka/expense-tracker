import React, { useState } from 'react';

import NewExpense from './components/NewExpense/NewExpense';
import Expenses from './components/Expenses/Expenses';

import DUMMY_EXPENSES from './Data/data';

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const expensesYears = expenses.map((expense) => {
    return expense.date.getFullYear();
  });
  const minYear = Math.min(...expensesYears);
  const maxYear = Math.max(...expensesYears);

  const [filteredYear, setFilteredYear] = useState(maxYear.toString());

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
    setFilteredYear(expense.date.getFullYear().toString()); // filter by the year of the added expense
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} minYear={minYear} maxYear ={maxYear} filteredYear={filteredYear} onSelectYear={filterChangeHandler} />
    </div>
  );
};

export default App;