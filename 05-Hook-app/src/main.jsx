import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
//import { MemoHook } from './06-memos/MemoHook'
//import { MultipleCustomHooks } from './03-examples/MultipleCustomHooks'
//import { FormWhithCustomHook } from './02-UseEffect/FormWhithCustomHook'
//import App from './App.jsx'
//import { CounterWithCustomHook } from './01-UseState/CounterWithCustomHook'
//import { SimpleForm } from './02-UseEffect/SimpleForm'
//import { HooksApp } from './HooksApp'
//import { CounterApp } from './01-UseState/CounterApp'
//import { FocusScreen } from './04-useRef/FocusScreen'
//import { Layout } from './05-useLayoutEffect/Layout'
//import { Memorize } from './06-memos/Memorize'
//import CallbackHook from './06-memos/CallbackHook'
//import { Padre } from './07-tarea-memo/07-tarea-memo/Padre';
//import './08-useReducer/intro-reducer';
import './index.css'
//import { TodoApp } from './08-useReducer/TodoApp'

import { MainApp } from './09-useContext/MainApp';
ReactDOM.createRoot(document.getElementById('root')).render(

  <BrowserRouter>
    {/* <React.StrictMode> */}
     <MainApp/>
  {/* </React.StrictMode>, */}
  </BrowserRouter>
  
)
