import React from 'react';
import { AppUI } from './AppUI';

// const defaultItem = [
//   { text: 'Cortar cebolla', completed: true },
//   { text: 'Tomar el cursso de intro a React', completed: false },
//   { text: 'Llorar con la llorona', completed: true },
//   { text: 'LALALALAA', completed: false },
// ];

function useLocalStorage(itemName, initialValue) {

  const [error, setError] = React.useState(false);
  const [loading, setLoading] = React.useState(true);
  const [item, setItem] = React.useState(initialValue);

  React.useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName);
        let parsedItem;


        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = initialValue;
        } else {
          parsedItem = JSON.parse(localStorageItem);
        }

        setItem(parsedItem);
        setLoading(false);

      } catch (error) {
        setError(error);
      }
    }, 1000);
  });

  const saveItem = (newTodos) => {
    try {
      const stringifiedItem = JSON.stringify(newTodos);
      localStorage.setItem(itemName, stringifiedItem);
      setItem(newTodos);
    } catch (error) {
      setError(error);
    }
  };

  return {
    item,
    saveItem,
    loading,
    error,
  };
}

function App() {
  // const [Item, saveItem] = useLocalStorage('TODOS_V1', []);
  const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error,
  } = useLocalStorage('TODOS_V1', []);

  const [searchValue, setSearchValue] = React.useState('');

  const completedItem = todos.filter(todo => !!todo.completed).length;
  const totalItem = todos.length;

  let searchedItem = [];

  if (!searchValue.length >= 1) {
    searchedItem = todos;
  } else {

    searchedItem = todos.filter(todo => {

      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();

      return todoText.includes(searchText);
    })
  }



  const completeTodo = (text) => {

    const todoIndex = todos.findIndex(todo => todo.text === text);

    const newTodos = [...todos];
    newTodos[todoIndex].completed = true;
    saveTodos(newTodos);

  };

  const deleteTodo = (text) => {

    const todoIndex = todos.findIndex(todo => todo.text === text);

    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);

  };


  return (
    <AppUI
      loading={loading}
      error={error}
      totalItem={totalItem}
      completedItem={completedItem}

      searchValue={searchValue}
      setSearchValue={setSearchValue}

      searchedTodos={searchedItem}

      completeTodo={completeTodo}
      deleteTodo={deleteTodo}
    />
  );
}

export default App;
