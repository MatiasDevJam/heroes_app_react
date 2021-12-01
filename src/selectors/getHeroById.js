import { heroes } from "../data/heroes";

// Esta función nos permite buscar un heroe por id

export const getHeroById = ( id ) => {

    return heroes.find( hero => hero.id === id );

}