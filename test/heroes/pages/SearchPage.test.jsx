const { render, screen, getByRole, fireEvent } = require("@testing-library/react");
const { MemoryRouter } = require("react-router-dom");
const { SearchPage } = require("../../../src/heroes/pages/SearchPage");

const mockedUseNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockedUseNavigate
}));

describe('Pruebas en <SearchPage />', () => {

    beforeEach(() => { jest.clearAllMocks() });
    
    test('Debe mostrar valores por defecto', () => { 
        
        const { container } = render(
            <MemoryRouter>
                <SearchPage />
            </MemoryRouter>
        );

        // console.log( container );
        expect( container ).toMatchSnapshot();

    });
     
    test('Debe mostrar en el input el valor del query-string y el resultado de búsqueda.', () => { 
        
        render(
            <MemoryRouter initialEntries={['/search?q=batman']}>
                <SearchPage />
            </MemoryRouter>
        );

        const input = screen.getByRole('textbox');
        expect( input.value ).toBe( 'batman' );

        const img = screen.getAllByRole('img')[0];
        expect( img.src ).toContain( 'batman' );

        // const searchAHeroBox = screen.getByText('Search a hero');
        expect( screen.queryByText('Search a hero') ).toBeFalsy();

    });

    test('Debe mostrar error si no se encuentra el hero (batman123)', () => { 
        
        render(
            <MemoryRouter initialEntries={['/search?q=batman123']}>
                <SearchPage />
            </MemoryRouter>
        );

        const error = screen.queryByText( 'No hero with:' );
        expect( error ).toBeTruthy();

    });

    test('Debe de llamar el navigate a la pantalla nueva', () => { 

        const inputValue = 'superman';
        
        render(
            <MemoryRouter>
                <SearchPage />
            </MemoryRouter>
        );

        const input = screen.getByRole('textbox');
        fireEvent.change( input, { target: { name: 'searchText', value: inputValue}});
        
        const btnSearch = screen.getByRole('button');
        fireEvent.click(btnSearch);
        
        expect( mockedUseNavigate ).toHaveBeenCalledWith(`?q=${ inputValue }`);

     })

 })