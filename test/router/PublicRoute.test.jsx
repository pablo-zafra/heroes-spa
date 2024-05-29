import { render, screen } from "@testing-library/react";
import { PublicRoute } from "../../src/router/PublicRoute";
import { AuthContext, types } from "../../src/auth";

describe('Pruebas en <PublicRoute />', () => {
    
    test('Debe de mostrar el children si no está autenticado', () => {

        const contextValue = {
            logged: false
        }
        
        // const contextValue = {
        //     logged: true,
        //     user: {
        //         name: 'testName',
        //         id: 123
        //     }
        // }
        
        render(
            <AuthContext.Provider value={ contextValue }>
                <PublicRoute>
                    <h1>Ruta Pública</h1>
                </PublicRoute>
            </AuthContext.Provider>    
        );

        expect( screen.getByText('Ruta Pública') ).toBeTruthy();
     })
});
