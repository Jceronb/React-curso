import React from 'react';
import ReactDOM from 'react-dom/client';
//import { App, HelloWorldApp } from "./HelloWorldApp";
//import { App2 } from "./HelloWorldApp"
//import { FirstApp } from './FirstApp';

import './styles.css';
//import { CounterApp2 } from './CounterApp2';
import { CounterApp} from './CounterApp';


// Con una funcion tradicional
// function App(){
//     //document.getElement....
//     return (<h1>Hola mundo !!</h1> );
// }


// Con funcion flecha
//const App = ()=>(<h1>Hola mundo !!</h1> );
//const App2 = ()=>(<div style={div}>Cómo estás? </div> );

// Renderizamos desde la carpeta HelloWorldApp.jsx
ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <CounterApp value={0} />
        
    </React.StrictMode>

);


