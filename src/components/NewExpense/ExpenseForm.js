import React from 'react';

import './ExpenseForm.css';

const ExpenseForm = () => {
    return <form>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label htmlFor="">Title</label>
                <input type="text" name="" id=""/>
            </div>
            <div className="new-expense__control">
                <label htmlFor="">Amount</label>
                <input type="number" name="" id="" min="0.01" step="0.01" />
            </div>
            <div className="new-expense__control">
                <label htmlFor="">Date</label>
                <input type="date" name="" id="" min="2019-01-01" max="2022-12-31" />
            </div>
        </div>
        <div className="new-expense__actions">
            <button type="submit">Add Expense</button>
        </div>
    </form>
}

export default ExpenseForm;