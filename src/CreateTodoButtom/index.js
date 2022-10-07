import React from "react";
import './CreateTodoButtom.css';
import { TodoContext } from '../TodoContext/index.js'

function CreateTodoButtom() {
    const { openModal,setOpenModal} = React.useContext(TodoContext);

    const onClickButtom = () => {
        // setOpenModal(prevState => !prevState) Solución del Profe
        !openModal ?
        setOpenModal(true):
        setOpenModal(false)   
    }
    return (
        <button
            className="CreateTodoButton"
            onClick={onClickButtom}
        >
            +
        </button>
    );
}

export { CreateTodoButtom };