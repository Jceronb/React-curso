// import { heroes } from './data/heroes';
// import { heroes } from './data/heroes';
// import heroes, { owners } from '../data/heroes';
import heroes from '../data/heroes';

// console.log( owners );
export const getHeroeById = (id) => heroes.find( (heroe) => heroe.id === id );
export const getHeroesByOwner = ( owner ) => heroes.filter( (heroe) => heroe.owner === owner );
// console.log( getHeroeById(2) );

// find?, filter


// console.log( getHeroesByOwner('Marvel') );


