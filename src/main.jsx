import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import EventBasic from './chap03/EventBasic';
import StateBasic from './chap03/StateBasic';

import books from './chap03/books.js';
import ForList from './chap03/ForList.jsx';
import ForFilter from './chap03/ForFilter.jsx';
import ForNest from './chap03/ForNest.jsx';
import ForSort from './chap03/ForSort.jsx';
import SlectComp from './chap03/SelectComp';
import SelectStyle from './chap03/SelectStyle';
import StyledPanel from './chap03/StylesPanel';
import TitledPanel from './chap03/TitledPanel';
import StateParent from './chap03/StateParent';
import EventMouse from './chap03/EventMouse';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <>
        <App />
        <EventBasic type="time" />
        <StateBasic init={0} />
        <ForList src={books} />
        <ForNest src={books} />
        <ForFilter src={books} />
        <ForSort src={books} />
        <SelectComp />
        <SelectStyle mode="light" />
        <StyledPanel>
          <p>Hi</p>
          <p>Hello world</p>
        </StyledPanel>
        <TitledPanel>
          <p key="title">Hi</p>
          <p key="body">Hello world</p>
        </TitledPanel>
        <StateParent />
        <EventMouse
          alt=”ロゴ画像"
          defaultSrc="https://www.web-deli.com/image/linkbanner_l.gif" 
          afterSrc="https://www.web-deli.com/image/home_chara.gif" />
    </>
  </StrictMode>,
)
