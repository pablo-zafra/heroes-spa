import { useReducer } from 'react';
import { AuthContext } from './AuthContext';
import { Authreducer } from './Authreducer';

const initialState = {
    logged: false
}

export const AuthProvider = ({ children }) => {

  const [ authState, dispatch ] = useReducer( Authreducer, initialState );

  return (
    <AuthContext.Provider value={{ }}>
        { children }
    </AuthContext.Provider>
  )
}
