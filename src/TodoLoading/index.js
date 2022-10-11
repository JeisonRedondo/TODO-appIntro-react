import React from 'react';
import './TodoLoading.css';
import loadingImage from './loading-icon1.png';

function TodoLoading() {
    return (
        <div className='container--loading'>
            {/* Curioso apra isar una imagen en React, tenemos que importarla de la carpeta asi este aqui */}
            <img className='container--loading__img' src={loadingImage} alt='Loading'/>
            <p className='container--loading__text'> Estamos Cargando, no desesperes...</p>
        </div>

    );
};
export { TodoLoading };