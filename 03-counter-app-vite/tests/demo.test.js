
// Prueba de ejemplo

describe('Pruebaes en <DemoComponent />', () => {

    test("Esta prueba no debe fallar", () => {

        // 1. Inicialización
        const message1 = 'Hola mundo';

        // 2. estímulo
        const message2 = message1.trim();

        // 3. Observar el comportamiento esperado
        expect(message1).toBe(message2);


} );
  
});






