import React from "react";
import './TodoSearch.css';

function TodoSearch(){

   return (
      <React.Fragment>
         <div className="container-TodoSearch">
            <input className="TodoSearch" ></input>
            <button className="TodoSearch__button">🔍</button>
         </div>
      </React.Fragment>
   );
}


export {TodoSearch};

