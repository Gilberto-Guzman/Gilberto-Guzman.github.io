/* --- Importacion de LIBRERIAS --- */

import React from 'react';
import ReactDOM from 'react-dom/client';

/* --- Importacion de ARCHIVOS --- */

import Navbar from '../../components/Navbar';
import Info from './container/info';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <Navbar />
        <Info />
    </React.StrictMode>,
)