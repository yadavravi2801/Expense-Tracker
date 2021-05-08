import React, { useState } from 'react';

import ExpenseItem from './ExpenseItem';
import ExpensesFilter from './ExpensesFilter';
import Card from '../UI/Card';
import './Expenses.css';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2022')

  const filterChangeHandler = (year) => {
    setFilteredYear(year);
  }

  return (
    <Card className="expenses">
      <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
        {
            props.items.map(item => <ExpenseItem key={item.title} title={item.title} amount={item.amount} date={item.date} />)
        }
    </Card>
  );
}

export default Expenses;
