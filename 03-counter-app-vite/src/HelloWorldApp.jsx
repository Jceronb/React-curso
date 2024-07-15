
//Con una funcion tradicional
 export function App(){
     //document.getElement....
     return (<h1>Hola mundo !!!</h1> );
 }

 export const HelloWorldApp = () => {
    return(<h2>Hello World App</h2> )
 }

 //podemos crear estilos de CSS en una variable
let div = {
    width:150,
    color: 'red',
    backgroundColor:'black',
    fontSize: 25
}

export const App2 = ()=>(<div style={div}> Cómo estás? </div> );

