import React, { useState } from 'react';

import Button from '../UI/Button';
import Modal from '../UI/Modal';
import classes from './ExpenseForm.module.css';

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');
  const [error, setError] = useState();

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    if (enteredTitle.trim().length === 0 || enteredAmount.trim().length === 0 || enteredDate.trim().length === 0) {
      setError({
        title: 'Invalid input',
        message: 'Please fill all the fields (non-empty values).',
      });
      return;
    }
    if (+enteredAmount < 0.01) {
      setError({
        title: 'Invalid amount',
        message: 'Please enter a valid amount (>= 0.01).',
      });
      return;
    }

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };

    props.onSaveExpenseData(expenseData);
    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <div>
      {error && (
        <Modal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <form onSubmit={submitHandler}>
        <div className={classes['new-expense__controls']}>
          <div className={classes['new-expense__control']}>
            <label>Title</label>
            <input
              type='text'
              value={enteredTitle}
              onChange={titleChangeHandler}
            />
          </div>
          <div className={classes['new-expense__control']}>
            <label>Amount</label>
            <input
              type='number'
              step='0.01'
              value={enteredAmount}
              onChange={amountChangeHandler}
            />
          </div>
          <div className={classes['new-expense__control']}>
            <label>Date</label>
            <input
              type='date'
              min='2020-01-01'
              max={new Date().toISOString().slice(0, 10)}
              value={enteredDate}
              onChange={dateChangeHandler}
            />
          </div>
        </div>
        <div className={classes['new-expense__actions']}>
          <Button type="button" onClick={props.onCancel}>Cancel</Button>
          <Button type='submit'>Add Expense</Button>
        </div>
      </form>
    </div>
  );
};

export default ExpenseForm;