import './Expenses.css';
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";
import {useState} from "react";

function Expenses(props) {
    const expenses = props.expenses;

    const [dateFilter, setDateFilter] = useState('2021');

    const selectFilterDateHandler = (date) => {
        console.log("date in parent:")
        console.log(date);
        setDateFilter(date);
    };

    return (
        <Card className="expenses">
            {/*first prop passes the default value to the child*/}
            <ExpensesFilter selected={dateFilter} onSelectFilterDate={selectFilterDateHandler}/>
            <ExpenseItem title={expenses[0].title} date={expenses[0].date} amount={expenses[0].amount}/>
            <ExpenseItem title={expenses[1].title} date={expenses[1].date} amount={expenses[1].amount}/>
            <ExpenseItem title={expenses[2].title} date={expenses[2].date} amount={expenses[2].amount}/>
        </Card>
    );
}

export default Expenses;