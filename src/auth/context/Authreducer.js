import { types } from "../types/types";


export const Authreducer = ( state = { logged: false }, action ) => {
  
    switch ( action.type ) {

        case types.login:
            return {
                ...state,
                logged: true,
                user: action.payload
            };

        case types.logout:
            return {
                logged: false,
            };

        default:
            return state.logged !== undefined ? state : { logged: false };
    }
}
