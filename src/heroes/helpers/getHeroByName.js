import { heroes } from "../data/heroes";

export const getHeroByName = ( name = '' ) => {

    console.log

  name = name.toLowerCase().trim();

  if ( name.length === 0 ) return [];

  return heroes.filter(
    hero => hero.superhero.toLowerCase().trim().includes( name )
  );
  
}
