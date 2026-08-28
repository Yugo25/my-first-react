import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import EventBasic from './chap03/EventBasic';
import StateBasic from './chap03/StateBasic';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <>
        <App />
        <EventBasic type="time" />
        <StateBasic init={0} />
    </>
  </StrictMode>,
)
