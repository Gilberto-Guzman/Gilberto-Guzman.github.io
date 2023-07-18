/* --- Importacion de LIBRERIAS --- */

import React from 'react';
import ReactDOM from 'react-dom';

/* --- Importacion de ARCHIVOS --- */

import Navbar from '../../components/Navbar';
import Code from './container/code';
import System from './container/system';
import Database from './container/database';
import Framework from './container/framework';
import Tech from './container/tech';
import Ability from './container/ability';

ReactDOM.render(
    <React.StrictMode>
        <Navbar />
        <Code />
        <System />
        <Database />
        <Framework />
        <Tech />
        <Ability />
    </React.StrictMode>,
    document.getElementById('root')
)