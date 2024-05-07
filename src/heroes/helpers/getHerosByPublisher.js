
import { heroes } from '../data/heroes';

export const getHerosByPublisher = ( publisher ) => {
  
    const validPublishers = ['DC Comics', 'Marvel Comics'];
    if ( !validPublishers.includes( publisher ) ) {
        throw new Error({ publisher } + ' no es un publisher válido.');
    } 
    
    return heroes.filter( h => h.publisher === publisher);
}
