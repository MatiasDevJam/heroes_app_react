import { heroes } from "../data/heroes";

/* Esta función nos permite buscar un heroe por la propiedad publisher
en caso no de encontrarla lanzará un error */

export const getHeroesByPublisher = ( publisher ) => {

    const validPublishers = ['DC Comics', 'Marvel Comics'];

    if( !validPublishers.includes( publisher ) ){
        throw new Error(`Publisher ${ publisher } no es correcto`)
    }

    return heroes.filter( hero => hero.publisher === publisher );
}