import React from 'react';
import { TodoProvider } from '../TodoContext';
import { AppUI } from './AppUI';


// const defaultItem = [
//   { text: 'Cortar cebolla', completed: true },
//   { text: 'Tomar el cursso de intro a React', completed: false },
//   { text: 'Llorar con la llorona', completed: true },
//   { text: 'LALALALAA', completed: false },
// ];

function App() {
  return (
    <TodoProvider>
          <AppUI />
    </TodoProvider>
  );
}

export default App;
