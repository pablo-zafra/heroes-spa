import { Navigate, useParams } from "react-router-dom"
import { getHeroById } from "../helpers";

export const HeroPage = () => {

const { heroId, ...rest } = useParams();

const hero = getHeroById( heroId );

if ( !hero ) {
   return <Navigate to="/Marvel" />
}

  return (
    <h1>HeroPage</h1>
  )
}
