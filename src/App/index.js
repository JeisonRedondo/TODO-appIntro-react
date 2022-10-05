import React from 'react';
import { AppUI } from './AppUI';

// const defaultItem = [
//   { text: 'Cortar cebolla', completed: true },
//   { text: 'Tomar el cursso de intro a React', completed: false },
//   { text: 'Llorar con la llorona', completed: true },
//   { text: 'LALALALAA', completed: false },
// ];

function useLocalStorage(itemName, initialValue){

  const localStorageItem = localStorage.getItem(itemName);
  let parsedItem;

  
  if (!localStorageItem) {
    localStorage.setItem(itemName,JSON.stringify(initialValue));
    parsedItem = initialValue;
  }else{
    parsedItem = JSON.parse(localStorageItem);
  }

  const [item, setItem] = React.useState(parsedItem);

  const saveItem = (newItem) => {
    const stringifiedItem = JSON.stringify(newItem);
    localStorage.setItem(itemName,stringifiedItem);
    setItem(newItem);
  };

  return [
    item, 
    saveItem
  ];
}

function App() {
  const [Item, saveItem] = useLocalStorage('TODOS_V1',[]);
  const [searchValue, setSearchValue] = React.useState('');

  const completedItem = Item.filter(todo => !!todo.completed).length;
  const totalItem = Item.length;

  let searchedItem = [];

  if (!searchValue.length >= 1) {
    searchedItem = Item;
  } else {

    searchedItem = Item.filter(todo => {

      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();

      return todoText.includes(searchText);
    })
  }

  

  const completeTodo = (text) => {

    const todoIndex = Item.findIndex(todo => todo.text === text);

    const newItem = [...Item];
    newItem[todoIndex].completed = true;
    saveItem(newItem);

  };

  const deleteTodo = (text) => {

    const todoIndex = Item.findIndex(todo => todo.text === text);

    const newItem = [...Item];
    newItem.splice(todoIndex, 1);
    saveItem(newItem);

  };

  return (
    <AppUI
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
