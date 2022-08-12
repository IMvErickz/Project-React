import React from 'react'
import ReactDOM from 'react-dom/client'
import Multi from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Multi.Navbar />
    <hr />
    <Multi.App />

  </React.StrictMode>
)
