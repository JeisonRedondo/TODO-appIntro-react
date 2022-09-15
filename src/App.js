import React from 'react';
import { TodoCounter } from './TodoCounter.js';
import { TodoSearch } from './TodoSearch.js';
import { TodoList } from './TodoList.js';
import { TodoItem } from './TodoItem.js';
import { CreateTodoButtom } from './CreateTodoButtom.js'
// import './App.css';

const todos = [
  { text: 'Cortar Cebolla', completed: false },
  { text: 'Tomas curso de intro a react', completed: false },
  { text: 'llorar con la llorona', completed: false },

]
function App(props) {
  return (
    <>
      <TodoCounter />
      

      <TodoSearch />
      

      <TodoList>
        {todos.map(todo => (
          <TodoItem key={todo.text} text={todo.text} />
        ))}
      </TodoList>

      <CreateTodoButtom />
      
    </>

  );
}

export default App;
