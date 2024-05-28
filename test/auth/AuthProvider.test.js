import { Authreducer } from "../../src/auth/context/Authreducer"
import { types } from "../../src/auth/types/types";

describe('Pruebas en el AuthReducer', () => { 
    test('Debe retornar estado por defecto', () => { 
        const state = Authreducer({ logged: false },{});
        expect( state ).toEqual( { logged: false });
     })
     test('login() debe autenticar y establecer el user', () => { 
        
        const action = {
            type: types.login,
            payload: {
                name: 'testName',
                id: 123
            }
        }

        const state = Authreducer({ logged: false },{ action });
        expect( state ).toEqual({ logged: true, user: action.payload});
        // console.log( state ) ;



      })
 })