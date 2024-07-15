//const { render } = require("@testing-library/react")
import {render, screen} from '@testing-library/react';
import {AddCategory} from '../../components/AddCategory';


describe('Pruebas en <AddCategory />', ()=> {

    test('Debe de cambiar el valor de la caja de texto ', () => {
      
        render( <AddCategory onNewCategory = { ()=> {} } /> );
        screen.debug();
    })
    

} )




