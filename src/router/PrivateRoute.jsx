import { useContext } from "react"
import { AuthContext } from "../auth/context"
import { Navigate, useLocation } from "react-router-dom";

export const PrivateRoute = ({ children }) => {

    const { logged } = useContext( AuthContext );

    const { pathname, search } = useLocation();

    const ultimaRuta = pathname + search;
    localStorage.setItem('ultimaRuta', ultimaRuta);


    
  return ( logged )
        ? children
        : <Navigate to="/login" />
}
