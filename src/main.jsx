import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='bg-current box-border h-full w-full '>
      <App />
    </div>
    
  </React.StrictMode>,
)
