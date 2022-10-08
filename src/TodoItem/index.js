import React from "react";
import './TodoItem.css';

function TodoItem(props) {

    const [isChecked, setIsChecked] = React.useState(props.completed);

    const handleOnChange = () => {
        setIsChecked(!isChecked);
      };

    // const completedValue = props.completed?'TodoItem-p--complete':'';

    return (
        <li className="TodoItem">
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
                id="TodoInput--item"
                name="TodoInput--item"
                checked={isChecked}
                onChange={handleOnChange}
            ></input>

            <label
                // props.completed && 'TodoItem-p--complete'
                htmlFor="TodoInput--item"
                className={`TodoItem-p ${isChecked ? 'TodoItem-p--complete' : ''}`}
            >{props.text}</label>
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
