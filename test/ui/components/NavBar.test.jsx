const { render, screen, fireEvent } = require("@testing-library/react");
const { Navbar } = require("../../../src/ui");
const { AuthContext } = require("../../../src/auth");
const { MemoryRouter } = require("react-router-dom");

const mockedUseNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockedUseNavigate
}))

describe('Pruebas en <NavBar />', () => {

    const contextValue = {
        logged: true,
        user: {
            id: 123,
            name: 'testName'
        },
        login: jest.fn(),
        logout: jest.fn()
    }

    beforeEach(() => jest.clearAllMocks() );

    test('Debe mostrar el nombre de ususario', () => { 
        
        render( 
            <AuthContext.Provider value={ contextValue }>
                <MemoryRouter>                    
                    <Navbar /> 
                </MemoryRouter>
            </AuthContext.Provider>
         )

         expect( screen.getByText('testName') ).toBeTruthy();

     });

     test('Debe llamar a logout y navigate al dar al botón logout', () => { 
        
        render( 
            <AuthContext.Provider value={ contextValue }>
                <MemoryRouter>                    
                    <Navbar /> 
                </MemoryRouter>
            </AuthContext.Provider>
         );

         const logoutBtn = screen.getByRole('button');
         fireEvent.click( logoutBtn );

         expect( contextValue.logout ).toHaveBeenCalled();
         expect( mockedUseNavigate ).toHaveBeenCalled();
        
      });

 })