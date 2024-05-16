import { useMemo } from 'react';
import { getHerosByPublisher } from '../helpers/getHerosByPublisher';
import { HeroCard } from './';

export const HeroList = ( { publisher } ) => {

    const heroes = useMemo( () => getHerosByPublisher( publisher ), [ publisher ] );
    // console.log( heroes );

    return (
        <div className="row rows-col-1 row-cols-md-3 g3">
            { 
                heroes.map( hero => {
                    return(
                        <HeroCard 
                            key={ hero.id }
                            { ...hero }
                        />
                    )
                })
            }
        </div>
    )

}
