import React from 'react';
import './EmptyTodos.css';
import addImage from './empty-img.png';

function EmptyTodos (){
    return (
        <div className='container-empty'>
            <img id='container-empty__img' src={addImage} alt='add a Todo'/>
            <p>!!Crea tu primer TODO¡¡</p>
        </div>
    );
};

export {EmptyTodos};