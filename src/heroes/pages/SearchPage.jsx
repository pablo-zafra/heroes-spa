import { useLocation, useNavigate } from 'react-router-dom';
import queryString from 'query-string';

import { useForm } from '../../hooks/useForm';
import { HeroCard } from '../components';
import { getHeroByName } from '../helpers';

export const SearchPage = () => {

  const navigate = useNavigate();
  const location = useLocation();

  const { q = '' } = queryString.parse( location.search );

  const heroes = getHeroByName( q );

  // console.log ( q );

  const { formState, onInputChange, onResetForm, searchText } = useForm({
    searchText: q,
  });

  const onSearchSubmit = ( event ) => {
    event.preventDefault();
    // console.log( searchText );

    navigate(`?q=${ searchText }`);
  }

  return (
    <>
      <h1>Search</h1>
      <hr />

      <div className="row animate__animated animate__fadeInUp">

        <div className="col-5">

          <h4>Searching</h4>
          <hr />

          <form onSubmit={ onSearchSubmit }>
            <input
              type="text"
              placeholder="Search a Hero"
              className="form-control"
              name="searchText"
              autoComplete="off"
              value={ searchText }
              onChange={ onInputChange }
            />
          </form>

          <button
            className="btn btn-outline-primary mt-3"
            onClick={ onSearchSubmit }
          >
            Search
          </button>


        </div>

        <div className="col-7">
          <h4>Results:</h4>
          <hr />

          {
            ( q === '' )
              ? <div className="alert alert-primary">Search a hero</div>
              : ( heroes.length === 0 )
              && <div className="alert alert-danger">No hero with: <b>{ q }</b></div>
          }

          {
            heroes.map( hero => 
              <HeroCard key={ hero.id } { ...hero } />
            )
          }

          </div>

        </div>



    </>
  )
}
