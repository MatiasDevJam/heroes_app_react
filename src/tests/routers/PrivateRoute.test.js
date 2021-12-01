import React from 'react'
import { mount } from 'enzyme'
import { PrivateRoute } from '../../routers/PrivateRoute'
import { MemoryRouter } from 'react-router-dom'

describe('Pruebas en <PrivateRoute />', () => {

    const props = {
        location:{
            pathname: '/marvel'
        }
    }

    test('debe mostrar el componente si esta autenticado y guardar localStorage', () => {

        const wrapper = mount(
            <MemoryRouter>
                <PrivateRoute 
                    isAuthenticated={ true }
                    element={ () => <span>Listo!</span> }
                    { ...props }
                />
                </MemoryRouter>
            )

        expect( wrapper.find('span').exists()).toBe( true );
        expect( localStorage.setItem ).toHaveBeenCalledWith('lastPath', '/marvel')
            
    })

    test('debe bloquear el componente si no está autenticado', () => {

        const wrapper = mount(
            <MemoryRouter>
                <PrivateRoute 
                    isAuthenticated={ false }
                    element={ () => <span>Listo!</span> }
                    { ...props }
                />
                </MemoryRouter>
            )

        expect( wrapper.find('span').exists()).toBe( false );
        expect( localStorage.setItem ).toHaveBeenCalledWith('lastPath', '/marvel')
        
    })
    
    
    
})
