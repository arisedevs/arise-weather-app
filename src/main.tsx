import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Enable Strict Mode in Production
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

// // Disable Strict Mode for Development
// ReactDOM.createRoot(document.getElementById('root')!).render(
//   // Removing React.StrictMode
//   <App />
// )