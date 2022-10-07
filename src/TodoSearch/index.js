import React from "react";
import { TodoContext } from "../TodoContext";
import './TodoSearch.css';

function TodoSearch() {

   const { searchValue, setSearchValue } = React.useContext(TodoContext);
   
   const onSearchValueChange = (event) => {

      console.log(event.target.value);
      setSearchValue(event.target.value);

   };

   return (
      <React.Fragment>
         <div className="container-TodoSearch">
            <input
               className="TodoSearch"
               placeholder="Cebolla"
               value={searchValue}
               onChange={onSearchValueChange}
            ></input>

            <button
               className="TodoSearch__button"
            >
               <span
                  role="img"
                  aria-label="Love"
               >🔍</span></button>
         </div>

      </React.Fragment>
   );
}


export { TodoSearch };


