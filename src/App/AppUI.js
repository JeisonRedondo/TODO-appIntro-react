import React from 'react';
import { TodoContext } from '../TodoContext/index.js';
import { TodoCounter } from '../TodoCounter/index.js';
import { TodoSearch } from '../TodoSearch/index.js';
import { TodoList } from '../TodoList/index.js';
import { TodoItem } from '../TodoItem/index.js';
import { TodoForm } from '../TodoForm/index.js'
import { CreateTodoButtom } from '../CreateTodoButtom/index.js';
import { Modal } from '../Modal';
import { TodoError } from '../TodoError/index.js';
import { TodoLoading } from '../TodoLoading/index.js';
import { EmptyTodos } from '../EmptyTodos/index.js';

function AppUI() {

    const {
        error,
        loading,
        searchedTodos,
        completeTodo,
        deleteTodo,
        openModal,
        setOpenModal,
    } = React.useContext(TodoContext);

    return (
        <React.Fragment>

            <TodoCounter />
            <TodoSearch />
            <TodoList>
                {error && <TodoError error={error} />}
                {loading && <TodoLoading />}
                {(!loading && !searchedTodos.length) &&
                    <EmptyTodos />}

                {searchedTodos.map(todo => (
                    <TodoItem
                        key={todo.text}
                        text={todo.text}
                        completed={todo.completed}
                        onComplete={() => completeTodo(todo.text)}
                        onDelete={() => deleteTodo(todo.text)}
                    />
                ))}
            </TodoList>
            {!!openModal && (
                <Modal>
                    <TodoForm />
                </Modal>
            )}
            <CreateTodoButtom
                setOpenModal={setOpenModal}
            />
        </React.Fragment>
    );
}

export { AppUI };