import React from 'react';


import'./TodoCounter.css'

// const estilos = {
//     color:'red',
//     backgroundColor:'yellow',
// };
// cuando utilizamos los estilos en linea, tenemos que generar dos llaves ({estas llaves}) para que asi nos identifique los estilos, la primera se hace para abrir el campo de javascript y el segundo es para identificarlo como un objeto.


function TodoCounter({total, completed}){

    
    return (
        <React.Fragment>
        <h2 className='TodoCounter'>
            Has completado {completed} de {total}
        </h2>
        </React.Fragment>
    );
}

export {TodoCounter};
