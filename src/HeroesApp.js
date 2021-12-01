import React, { useReducer } from 'react'
import { useEffect } from 'react'
import { AuthContext } from './auth/AuthContext'
import { authReducer } from './auth/authReducer'
import { AppRouter } from './routers/AppRouter'

const init = () => {
    return JSON.parse(localStorage.getItem('user')) || { logged: false }
}

export const HeroesApp = () => {

    const [user, dispatch] = useReducer(authReducer, {}, init);

    useEffect(() => {
        localStorage.setItem( 'user', JSON.stringify( user ) );
    }, [user])

    return (

        /* utilizamos nuestro componente AppRouter,
        en este componente definiremos nuestras rutas */
        <AuthContext.Provider value= {{ user, dispatch }}>
            <AppRouter />
        </AuthContext.Provider>
        
    )
}
