/* --- Importacion de LIBRERIAS --- */

import React from 'react'
import ReactDOM from 'react-dom/client'

/* --- Importacion de ARCHIVOS --- */

// import Test from './container/test'
import Navbar from '../../components/Navbar'
import Header from './container/header'
// import Alert from './container/alert'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Navbar />
    <Header />
    {/* <Alert /> */}
  </React.StrictMode>,
)
