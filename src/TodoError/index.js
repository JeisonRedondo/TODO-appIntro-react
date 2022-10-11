import React from 'react';
import './TodoError.css';
import errorImg from './error-image.png';

function TodoError ({error}){
    return (
        <div className='container--error'>
            <img id='error--img' src={errorImg} alt='error'/>
            <p className='error--text'>Ha ocurrido un error, por favor recarga la pagina</p>
            <p>{error}</p>
        </div>
        
    );
};

export { TodoError } ;