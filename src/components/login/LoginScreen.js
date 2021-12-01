import React from 'react'
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../auth/AuthContext';
import { types } from '../../types/types';

export const LoginScreen = ({ history }) => {

    const { dispatch } = useContext( AuthContext )

    const navigate = useNavigate();

    const lastPath = localStorage.getItem('lastPath') || '/';

    /* utilizamos la prop history de react-router-dom
    para controlar la navegación del botón */
    const handleLogin = () => {

        dispatch({
            type: types.login,
            payload: {
                name: 'Fernando'
            }
        })

        navigate( lastPath );

    }

    return (
        <div className="container mt-5">
            <h1>Login</h1>
            <hr />

            <button
                className="btn btn-primary"
                onClick={ handleLogin }
            >
                Login
            </button>
        </div>
    )
}
