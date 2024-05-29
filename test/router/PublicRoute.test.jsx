import { render, screen } from "@testing-library/react";
import { PublicRoute } from "../../src/router/PublicRoute";
import { AuthContext } from "../../src/auth";
import { MemoryRouter, Route, Routes } from "react-router-dom";

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
        
     });

     test('Debe de mostrar el children si está autenticado', () => {

        // const contextValue = {
        //     logged: false
        // }

        const contextValue = {
            logged: true,
            user: {
                name: 'testName',
                id: 123
            }
        }
        
        render(
            <AuthContext.Provider value={ contextValue }>
                <MemoryRouter>
                    <Routes>
                        <Route path="login" element={
                            <PublicRoute>
                                <h1>Ruta Pública</h1>
                            </PublicRoute>
                        } />
                        <Route path="/" element={
                            <h1>Ruta Privada</h1>
                        } />
                    </Routes>
                </MemoryRouter>
            </AuthContext.Provider>
        );

        expect( screen.getByText('Ruta Privada') ).toBeTruthy();
        
     });
});
