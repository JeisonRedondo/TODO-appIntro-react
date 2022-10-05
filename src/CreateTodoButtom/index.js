import React from "react";
import './CreateTodoButtom.css';

function CreateTodoButtom(props) {

    const onClickButtom = (msg) => {
        alert(msg);
    }
    return (
        <button
            className="CreateTodoButton"
            onClick={() => onClickButtom('Aqui se deberia abrir el modal')}
        >
            +
        </button>
    );
}

export { CreateTodoButtom };