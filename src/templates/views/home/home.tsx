/* --- Importacion de LIBRERIAS --- */

import React from 'react'
import ReactDOM from 'react-dom/client'

/* --- Importacion de ARCHIVOS --- */

import Navbar from '../../components/Navbar'
import Header from './container/header'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Navbar />
    <Header />
  </React.StrictMode>,
)
