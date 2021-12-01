import React from 'react'
import { mount } from 'enzyme'
import { MemoryRouter, Route } from 'react-router-dom'

import { HeroScreen } from "../../../components/heroes/HeroScreen"

describe('Pruebas en <HeroScreen />', () => {

    const history = {
        length: 10,
        push: jest.fn(),
        goBack: jest.fn()
    }

    

    test('debe mostrar el componente redirect si no hay agumentos en el URL', () => {

        const wrapper = mount(
            <MemoryRouter initialEntries={['/hero']}>
                <HeroScreen history={ history } />
            </MemoryRouter>
            
        );

        expect( wrapper.filter('Redirect').exists() ).toBe( true );
        
    })
    
    test('debe mostrar un hero si el parametro existe y se encuentra', () => {
        
        const wrapper = mount(
            <MemoryRouter initialEntries={['/hero/marvel-spider']}>
                <Route path="hero/:heroeId" element={ HeroScreen } />
            </MemoryRouter>
            
        );

        expect( wrapper.find('.row').exists() ).toBe( true );
    })
    
    test('debe regresar a l pantalla anterior con PUSH', () => {

        const history = {
            length: 1,
            push: jest.fn(),
            goBack: jest.fn()
        }

        const wrapper = mount(
            <MemoryRouter initialEntries={['/hero/marvel-spider']}>
                <Route 
                    path="hero/:heroeId" 
                    element={ () => <HeroScreen history={ history } /> }
                />
            </MemoryRouter>
            
        );

        wrapper.find('button').prop('onClick')();

        expect( history.push ).toHaveBeenCalledWith('/');
        expect( history.goBack ).not.toHaveBeenCalled();
        
    })

    test('debe regresar a la pantalla anterior', () => {

        const wrapper = mount(
            <MemoryRouter initialEntries={['/hero/marvel-spider']}>
                <Route 
                    path="hero/:heroeId" 
                    element={ () => <HeroScreen history={ history } /> }
                />
            </MemoryRouter>
            
        );

        wrapper.find('button').prop('onClick')();

        expect( history.push ).toHaveBeenCalledTimes(0);
        expect( history.goBack ).toHaveBeenCalled();
        
    })
    
    test('debe llamar el redirect si el hero no existe', () => {

        const wrapper = mount(
            <MemoryRouter initialEntries={['/hero/marvel-spider654654']}>
                <Route 
                    path="hero/:heroeId" 
                    element={ () => <HeroScreen history={ history } /> }
                />
            </MemoryRouter>
            
        );

        expect( wrapper.text() ).toBe('');
        
    })
    
    
})
