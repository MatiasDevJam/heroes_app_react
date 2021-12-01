import React from 'react'
import PropTypes from 'prop-types'
import { Route, Routes, useNavigate } from 'react-router'

export const PrivateRoute = ({
    isAuthenticated,
    element: Component,
    ...rest
}) => {

    localStorage.setItem('lastPath', rest.location.pathname);

    const navigate = useNavigate();

    return (

        <Routes>
    
        <Route { ...rest } 
            element={ ( props ) =>(
                ( isAuthenticated )
                    ? ( <Component { ...props } /> )
                    : ( navigate('/login') )
            ) }
        />
       </Routes>
    )
}

PrivateRoute.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    element: PropTypes.func.isRequired
}
