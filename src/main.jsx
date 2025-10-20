import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'


import Stairs from './components/Stairs.jsx'
import Navcontext from './context/Navcontext.jsx'




createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Stairs>
    
      <Navcontext>
    <App />
      </Navcontext>
    </Stairs>
    </BrowserRouter>
  </StrictMode>
)
