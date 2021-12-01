import React from 'react'
import { AppRouter } from '../../routers/AppRouter'
import { mount } from 'enzyme'
import { AuthContext } from '../../auth/AuthContext'

describe('Pruebas en <AppRouter />', () => {

    const contextValue= {
        dispatch: jest.fn(),
        user:{
            logged: false
        }
    }

    test('debe mostrar el login si no está autenticado', () => {

        const wrapper = mount(
            <AuthContext.Provider value={ contextValue }>
                <AppRouter />
            </AuthContext.Provider>
        )

        expect( wrapper ).toMatchSnapshot();
        
    })

    test('debe mostrar el componente marvel si esta autenticado', () => {

        const contextValue= {
            dispatch: jest.fn(),
            user:{
                logged: true,
                name: 'Julieta'
            }
        }

        const wrapper = mount(
            <AuthContext.Provider value={ contextValue }>
                <AppRouter />
            </AuthContext.Provider>
        )

        expect( wrapper.find('.navbar').exists() ).toBe( true );
        
    })
    
    
    
})
