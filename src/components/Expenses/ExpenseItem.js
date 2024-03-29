import './ExpenseItem.css';
import './ExpenseDate'
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

import {useState} from "react";

function ExpenseItem(props) {
    const [title, setTitle] = useState(props.title);


    const clickHandler = () => {
        setTitle('Updated!');
        console.log("Clicked!")
    };

    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date}/>
            <div className="expense-item__description">
                <h2>{title}</h2>
                <div className="expense-item__price">{'$' + props.amount}</div>
            </div>
            <button onClick={clickHandler}>Change title</button>
        </Card>
    );
}

export default ExpenseItem;