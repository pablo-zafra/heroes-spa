import { getHerosByPublisher } from "../helpers/getHerosByPublisher"

export const HeroList = ( { publisher } ) => {

    const heroes = getHerosByPublisher( publisher );

    const heroList = heroes.map( h => {
        return <li>{ h.superhero }</li>
    })

    return (
        <ul>
            { heroList }
        </ul>
    )

}
