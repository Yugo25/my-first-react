import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import EventBasic from './chap03/EventBasic';
import StateBasic from './chap03/StateBasic';

import books from './chap03/books.js';
import ForList from './chap03/ForList.jsx';
import ForFilter from './chap03/ForFilter.jsx';
import ForSort from './chap03/ForSort.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <>
        <App />
        <EventBasic type="time" />
        <StateBasic init={0} />
        <ForList src={books} />
        <ForFilter src={books} />
        <ForSort src={books} />
    </>
  </StrictMode>,
)
