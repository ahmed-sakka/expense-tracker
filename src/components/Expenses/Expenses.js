import React from 'react';

import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';
import classes from './Expenses.module.css';

const Expenses = (props) => {

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === props.filteredYear;
  });

  return (
    <Card className={classes.expenses}>
      <ExpensesFilter
        min={props.minYear}
        max={props.maxYear}
        selected={props.filteredYear}
        onChangeFilter={props.onSelectYear}
      />
      <ExpensesChart expenses={filteredExpenses} />
      <ExpensesList items={filteredExpenses} onDeleteItem={props.onDeleteItem} />
    </Card>
  );
};

export default Expenses;