import React, { useContext } from 'react';
import {
    BrowserRouter,
    Routes,
  } from "react-router-dom";
import { AuthContext } from '../auth/AuthContext';
import { LoginScreen } from '../components/login/LoginScreen';
import { DashboardRoutes } from './DashboardRoutes';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

export const AppRouter = () => {

    const { user } = useContext(AuthContext);

    return (
        <BrowserRouter>
            <div>
                <Routes>
                    <PublicRoute 
                        exact="true" 
                        path="login" 
                        element={ <LoginScreen /> } 
                        isAuthenticated={ user.logged }
                    />

                        {/* el endpoint "/" renderiza el componente DashboardRoutes */}
                    <PrivateRoute  
                        path="/" 
                        element={ <DashboardRoutes />} 
                        isAuthenticated={ user.logged }
                    />
                </Routes>
            </div>
        
        </BrowserRouter>
    )
}
