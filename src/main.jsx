import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BrowserRouter as Router } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router >
    <App />
    <ToastContainer style={{width:'50%', }}/>
    </Router>
  </StrictMode>,
)