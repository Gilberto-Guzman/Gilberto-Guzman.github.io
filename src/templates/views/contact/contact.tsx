/* --- Importacion de LIBRERIAS --- */

import React from 'react';
import ReactDOM from 'react-dom';

/* --- Importacion de ARCHIVOS --- */

import Navbar from '../../components/navbar';
import Info from './container/info';


ReactDOM.render(
    <React.StrictMode>
        <Navbar />
        <Info />
    </React.StrictMode>,
    document.getElementById('root')
)