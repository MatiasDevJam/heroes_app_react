import React from 'react'
import PropTypes from 'prop-types'
import { Route, useNavigate } from 'react-router-dom'

export const PublicRoute = ({
    isAuthenticated,
    element: Component,
    ...rest
}) => {

    const navigate = useNavigate();

    return (
        
        <Route { ...rest } 
            element={ ( props ) =>(
                ( isAuthenticated )
                    ? ( <Component { ...props } /> )
                    : ( navigate('/') )
            ) }
        />
    
    )
}

PublicRoute.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    element: PropTypes.func.isRequired
}
