import React from 'react'
import ReactDOM from 'react-dom/client'
import Navbar from '../../components/Navbar';

import Test from './container/test';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Navbar />
    <Test />
  </React.StrictMode>,
)
