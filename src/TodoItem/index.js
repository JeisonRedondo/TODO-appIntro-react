import React from "react";
import { TodoContext } from '../TodoContext';
import './TodoItem.css';

function TodoItem(props) {

    const [isChecked, setIsChecked] = React.useState(props.completed);
    const {completeTodo,returnTodo} = React.useContext(TodoContext);

    const handleOnChange = (text) => {
        setIsChecked(!isChecked);
        isChecked?returnTodo(text):completeTodo(text)
        ;
      };

    // const completedValue = props.completed?'TodoItem-p--complete':'';

    return (
        <li className="TodoItem" >
            {/* <span className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`} >
                √
            </span>
            <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
                {props.text}
            </p>
            <span span className="Icon Icon-delete">
                X
            </span> */}
            <input
                type="checkbox"
                id={`item ${props.text}`}
                className="TodoItem--input"
                // "(TodoInput--item) el label responde al id del input, por eso habia falado al colocar el reconocimiento, sin olvidar de que les estaba dando el mismo id a todos los inputs, razon por la cuál estaba registrando el click errado."

                name={`item ${props.text}`}
                checked={isChecked}
                onChange={() =>handleOnChange(props.text)}
            ></input>
            <label
                htmlFor={`item ${props.text}`}
                className={`TodoItem-p ${isChecked ? 'TodoItem-p--complete' : ''}`}
            >{props.text}
            </label>
            <span
                className="Icon Icon-delete"
                onClick={props.onDelete}
            >
                X
            </span>
        </li>
    )
}

export { TodoItem };
