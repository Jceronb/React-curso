import { CounterApp } from "../src/CounterApp";
import { fireEvent, render,screen } from "@testing-library/react";

describe('Pruebas en el <CounterApp/>', () => {

  const initialValue = 10;
  test('debe de hacer match en el snapshot ', () => {
    const {container} = render( <CounterApp value={initialValue}/> )
    expect (container).toMatchSnapshot();
  })

  test('debe mostrar el valor inicial de 100 < CounterApp value = {100} /> ', () => {

    render( <CounterApp value={100}/> );
    expect(screen.getByText(100)).toBeTruthy();

    expect( screen.getByRole( 'heading', {level:2}).innerHTML ).toContain('100');
    
  });


  test('debe incrementar con el boton +1', () => {

    render( <CounterApp value={initialValue}/> );
    fireEvent.click(screen.getByText ('+1'))
    expect( screen.getByText('11' )).toBeTruthy();
    
  });

  test('debe decrementar con el boton -1', () => {

    render( <CounterApp value={initialValue}/> );
    fireEvent.click(screen.getByText ('-1'))
    screen.debug();
    expect( screen.getByText('9' )).toBeTruthy();
    
  });

  test('debe resetear con el boton Reset', () => {

    render( <CounterApp value={initialValue}/> );
    fireEvent.click(screen.getByText ('+1'));
    fireEvent.click(screen.getByText ('+1'));
    fireEvent.click(screen.getByText ('+1'));
    fireEvent.click(screen.getByText ('+1'));

    fireEvent.click(screen.getByText ('Reset'))
//    screen.debug();
    expect( screen.getByText(initialValue )).toBeTruthy();
    
  });
  
  
});




