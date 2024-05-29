import { Authreducer, types } from "../../../src/auth";

describe('Pruebas en el AuthReducer', () => {

    test('Debe retornar estado por defecto', () => { 
        const state = Authreducer({},{});
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

        const state = Authreducer({ logged: false }, action );

        expect( state ).toEqual({ logged: true, user: action.payload});
      })

      test('logout() debe borrar el usuario y establecer el logged en false', () => { 

        const state = {
            logged: true,
            user: {
                name: 'testName',
                id: 123
            }
        }
        
        const action = {
            type: types.logout
        }

        const newState = Authreducer({ state }, action);

        expect( newState ).toEqual({ logged: false});

       })
 })