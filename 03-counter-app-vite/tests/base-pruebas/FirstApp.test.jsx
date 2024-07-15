import { render } from "@testing-library/react"
import { FirstApp } from "../../src/FirstApp"

describe('Pruebas en <FirstApp>', () => {

    test(' debe de hacer un match con el snapshow ', () => {

        const title = "Hola, soy Goku";    
        const {container} = render(<FirstApp title={title} /> )
        console.log(container);
        expect ( container ).toMatchSnapshot();
    });

    test('debe mostrar el título en un h1 ', () => {

        const title = 'Hola, soy Goku';
        const { container, getByText } = render( <FirstApp title = {title}/> );
        expect ( getByText (title)).toBeTruthy();

        const h1 = container.querySelector('h1');
        expect (h1.innerHTML).toContain(title);
      
    });
    
    
});











