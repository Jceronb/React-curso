import { render } from "@testing-library/react";

describe('Pruebas en <GifGridItems />', () => {

    const title = 'Saitama';
    const url = 'https://one-punch.com/saitama.jpg';

    test('Debe de hacer match con el snapshot', () => { 
        
        const { container } = render( <GifGridItems  title = {title} url= {url} /> )
        expect ( container ).toMatchSnapshot();
         });

});


