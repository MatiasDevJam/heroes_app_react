import React from 'react'
import { useMemo } from 'react';
import { getHeroesByPublisher } from '../../selectors/getHeroesByPublisher';

import { HeroCard } from './HeroCard';


// Este componente maneja los heroes con la propiedad publisher

export const HeroList = ({ publisher }) => {

    const heroes = useMemo(() => getHeroesByPublisher( publisher ), [ publisher ]);

    return (
        <div className="card-columns animate__animated animate__fadeInLeftBig">
           {
               heroes.map( hero => (
                <HeroCard 
                    key={ hero.id }
                    { ...hero }
                />
               ) )
           } 
        </div>
    )}
