import './ExpenseForm.css';
import {useState} from "react";

const ExpenseForm = (props) => {
    // const [enteredTitle, setEnteredTitle] = useState('');
    // const [enteredAmount, setEnteredAmount] = useState('');
    // const [enteredDate, setEnteredDate] = useState('');
    const [userInput, setUserInput] = useState({
        title: '',
        amount: '',
        date: ''
    });

    const titleChangeHandler = (event) => {
        // setEnteredTitle(event.target.value);
        // setUserInput({
        //     ...userInput, // copies old values
        //     enteredTitle: event.target.value,
        // }) inferior way for managing complex state
        setUserInput((prevState) => {
            return {...prevState, title: event.target.value}; // this schedules state updating properly, so no problems
            // stemming from concurrent management of state can appear
        });
    };
    const amountChangeHandler = (event) => {
        // setEnteredAmount(event.target.value);
        setUserInput((prevState) => {
            return {...prevState, amount: event.target.value};
        });
    };
    const dateChangeHandler = (event) => {
        // setEnteredDate(event.target.value);
        setUserInput((prevState) => {
            return {...prevState, date: event.target.value};
        });
    };

    const submitHandler = (event) => {
        event.preventDefault(); // prevents page reloading
        setUserInput((prevState) => {
            return {...prevState, title: "", amount: "", date: ""};
        });

        console.log(userInput);

        props.onSaveExpenseData(userInput); // passing data to parent
    };

    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text"
                           value={userInput.title}
                           onChange={titleChangeHandler}
                    />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" min="0.01" step="0.01" onChange={amountChangeHandler}
                           value={userInput.amount}/>
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" min="2019-01-01" max="2022-12-31" onChange={dateChangeHandler}
                           value={userInput.date}/>
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit">Add Expense</button>
            </div>
        </form>
    )
};

export default ExpenseForm;