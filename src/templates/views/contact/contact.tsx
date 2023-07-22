/* --- Importacion de LIBRERIAS --- */

import React from 'react';
import ReactDOM from 'react-dom';

/* --- Importacion de ARCHIVOS --- */

import Navbar from '../../components/Navbar';
import Test from './container/test';


ReactDOM.render(
    <React.StrictMode>
        <Navbar />
        <Test />
    </React.StrictMode>,
    document.getElementById('root')
)