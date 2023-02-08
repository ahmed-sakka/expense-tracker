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

  const deleteExpenseHandler = expenseId => {
    setExpenses((prevExpenses) => {
      const deletedExpense = prevExpenses.filter(expense => expense.id === expenseId)[0];
      const updatedExpenses = prevExpenses.filter(expense => expense.id !== expenseId);
      // update filtered year if all expenses of selected year are deleted
      if (updatedExpenses.length > 0 && updatedExpenses.filter(expense => expense.date.getFullYear() === deletedExpense.date.getFullYear()).length === 0) {
        setFilteredYear(updatedExpenses[0].date.getFullYear().toString());
      }
      return updatedExpenses;
    });

  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses
        items={expenses}
        minYear={minYear}
        maxYear={maxYear}
        filteredYear={filteredYear}
        onSelectYear={filterChangeHandler}
        onDeleteItem={deleteExpenseHandler} />
    </div>
  );
};

export default App;