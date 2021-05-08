import React, { useState } from 'react';

import './ExpenseForm.css';

const ExpenseForm = (props) => {
    const [userInput, setUserInput] = useState({
        title : '',
        amount : '',
        date : ''
    })

    const changeHandler = (event) => {
        setUserInput((prevState) => {
            return {
                ...prevState,
                [event.target.name] : event.target.value
            }
        })
    }

    const submitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            ...userInput,
            date : new Date(userInput.date)
        }

        props.onSaveExpenseData(expenseData);
    }

    return <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label htmlFor="">Title</label>
                <input type="text" name="title" value={userInput.title} onChange={changeHandler}/>
            </div>
            <div className="new-expense__control">
                <label htmlFor="">Amount</label>
                <input type="number" name="amount" value={userInput.amount} min="0.01" step="0.01" onChange={changeHandler} />
            </div>
            <div className="new-expense__control">
                <label htmlFor="">Date</label>
                <input type="date" name="date" value={userInput.date} min="2019-01-01" max="2022-12-31" onChange={changeHandler} />
            </div>
        </div>
        <div className="new-expense__actions">
            <button type="submit">Add Expense</button>
        </div>
    </form>
}

export default ExpenseForm;