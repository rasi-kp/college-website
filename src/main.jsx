import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <h4 className='btn danger text-cyan-600'>click me</h4>
    <App />
  </React.StrictMode>,
)
