/* --- Importacion de LIBRERIAS --- */

import React from 'react'
import ReactDOM from 'react-dom'

/* --- Importacion de ARCHIVOS --- */

import Navbar from '../../components/navbar'
import Code from './container/code'

ReactDOM.render(
    <React.StrictMode>
        <Navbar />
        <Code />
    </React.StrictMode>,
    document.getElementById('root')
)