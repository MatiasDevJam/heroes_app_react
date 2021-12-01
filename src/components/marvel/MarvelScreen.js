import React from 'react'
import { HeroList } from '../heroes/HeroList'

export const MarvelScreen = () => {
    return (
        <div>
            <h1>MarvelScreen</h1>
            <hr />

            {   /* Llamamos al componente HeroList y le pasamos la prop publisher 
                de esta forma solo nos trae los heroes filtrados por la 
                propiedad publisher */
            }
            <HeroList publisher="Marvel Comics" />
        </div>
    )
}
