import PropTypes from 'prop-types';



//const numeros = [1,2,3,4,5,6,7,8,9];
 
//const resultado =(a, b)=>{
    //return a * b;
//}

export const FirstApp = ({title,subTitle, name})=> {
  
       //console.log (props);
    return (
        <> 
        <h1>{title}</h1>
        <p>{subTitle} </p>
        <p>{name}</p>
        </>
    )
}

FirstApp.propTypes = {
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.string,
}

// Se puede definir los defaultProps

FirstApp.defaultProps = {
    name: 'Jesús Cerón',
    subTitle: 'No hay sub título',
    title: 'No hay título',

}


