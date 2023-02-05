import React from 'react';

import './ExpensesFilter.css';

const ExpensesFilter = (props) => {
  const dropdownChangeHandler = (event) => {
    props.onChangeFilter(event.target.value);
  };

  const selectOptions = [];
  for (let year = props.max; year >= props.min; year--) {
    selectOptions.push(<option key={year} value={year}>{year}</option>);
  };

  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by year</label>
        <select value={props.selected} onChange={dropdownChangeHandler}>
          {selectOptions}
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;