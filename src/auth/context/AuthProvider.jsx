import { useReducer } from 'react';
import { AuthContext } from './AuthContext';
import { Authreducer } from './Authreducer';
import { types } from '../types/types';

const initialState = {
    logged: false
}

export const AuthProvider = ({ children }) => {

  const [ authState, dispatch ] = useReducer( Authreducer, initialState );

  const login = async( name = '' ) => {
    const action = {
        type: types.login,
        payload: {
            id: 'ABC',
            name: name
        }
    }
    dispatch(action);
  }

  return (
    <AuthContext.Provider value={{
        ...authState,
        login: login
    }}>
        { children }
    </AuthContext.Provider>
  )
}
