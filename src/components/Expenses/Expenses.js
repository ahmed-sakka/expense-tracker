import React from 'react';

import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';
import './Expenses.css';

const Expenses = (props) => {

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === props.filteredYear;
  });

  return (
    <div>
      <Card className='expenses'>
        <ExpensesFilter
          min={props.minYear}
          max={props.maxYear}
          selected={props.filteredYear}
          onChangeFilter={props.onSelectYear}
        />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
};

export default Expenses;