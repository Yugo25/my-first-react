import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import EventBasic from'./EventBasic';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <>
        <App />
        <EventBasic type="time" />
    </>
  </StrictMode>,
)
