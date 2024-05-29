import { types } from "../../../src/auth"

describe('Pruebas en Types.js', () => { 
    
    test('Debe regresar los types correctos', () => { 
        
        expect(types).toEqual({
            login: '[Auth] Login',
            logout: '[Auth] Logout',
        })
     })
 })