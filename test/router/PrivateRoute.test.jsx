import { render, screen } from "@testing-library/react";
import { AuthContext } from "../../src/auth";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { PrivateRoute } from "../../src/router/PrivateRoute";

describe('Pruebas en <PrivateRoute />', () => {
    
    test('Debe de mostrar el children si está autenticado', () => {

        Storage.prototype.setItem = jest.fn();
        
        const contextValue = {
            logged: true,
            user: {
                name: 'testName',
                id: 123
            }
        }
        
        render(
            <AuthContext.Provider value={ contextValue }>
                <MemoryRouter initialEntries={['/marvel']}>
                    <PrivateRoute>
                        <h1>Ruta Privada</h1>
                    </PrivateRoute>
                </MemoryRouter>
            </AuthContext.Provider>    
        );


        expect( screen.getByText('Ruta Privada') ).toBeTruthy();
        expect( localStorage.setItem ).toHaveBeenLastCalledWith('ultimaRuta','/marvel');
        
     });

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
        
        // render(
        //     <AuthContext.Provider value={ contextValue }>
        //         <MemoryRouter>
        //             <Routes>
        //                 <Route path="login" element={
        //                     <PublicRoute>
        //                         <h1>Ruta Pública</h1>
        //                     </PublicRoute>
        //                 } />
        //                 <Route path="/" element={
        //                     <h1>Ruta Privada</h1>
        //                 } />
        //             </Routes>
        //         </MemoryRouter>
        //     </AuthContext.Provider>
        // );

        // expect( screen.getByText('Ruta Privada') ).toBeTruthy();
        
     });
});
