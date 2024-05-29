import { render, screen } from "@testing-library/react";

describe('Pruebas en <PublicRoute />', () => {
    
    test('Debe de mostrar el children si no está autenticado', () => { 
        
        render( <PublicRoute /> );
     })
});
