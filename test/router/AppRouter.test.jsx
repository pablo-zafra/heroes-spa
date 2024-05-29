import { MemoryRouter } from "react-router-dom";
import { AppRouter } from "../../src/router/AppRouter";
import { render, screen } from "@testing-library/react";
import { AuthContext } from "../../src/auth";

describe('Pruebas en <App Router />', () => {
    test('Debe mostrar el login si no está autenticado', () => { 
        
        const contextValue = {
            logged: false
        }
        
        render(
            <MemoryRouter initialEntries={['/marvel']}>
                <AuthContext.Provider value={ contextValue }>
                    <AppRouter />
                </AuthContext.Provider>    
            </MemoryRouter>
        );

        // screen.debug();
        expect( screen.getAllByText('Login').length ).toBeGreaterThan(0);
     });

     test('Debe mostrar el componente de Marvel si está autenticado', () => { 

        const contextValue = {
            logged: true,
            user: {
                id: 123,
                name: 'testName'
            }
        }
        
        render(
            <MemoryRouter initialEntries={['/login']}>
                <AuthContext.Provider value={ contextValue }>
                        <AppRouter />
                </AuthContext.Provider>    
            </MemoryRouter>
        );

        // console.log( screen.getAllByText('Marvel').length );
        expect( screen.getAllByText('Marvel').length ).toBeGreaterThan(0);
        
      })
});
