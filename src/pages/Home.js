/* eslint-disable no-lone-blocks */

import { useEffect, useState } from 'react';
import { store } from '../store/store';
import { Provider } from 'react-redux';
import { JikkomonGridItems } from '../components/JikkomonGridItems';
import { JikkomonModal } from '../components/JikkomonModal';
import { JikkomonDetails } from '../components/JikkomonDetails';

import '../styles/Home.css';

export const Home = ({ history }) => {

  const [allJikkomons, setAllJikkomons] = useState([]);
  const [loadMoreJikkomons, setLoadMoreJikkomons] = useState('https://pokeapi.co/api/v2/pokemon?limit=20');

  const getAllJikkomons = async () => {
    const response = await fetch(loadMoreJikkomons)
    const data = await response.json()
    setLoadMoreJikkomons( data.next )

    const createJikkomonObject = ( result ) => {
          result.forEach( async jikkomon => {
            const response = await fetch( `https://pokeapi.co/api/v2/pokemon/${ jikkomon.name }` )
            const data = await response.json()
            setAllJikkomons( currentListOfJikkomons => [ ...currentListOfJikkomons, data ] )
          });
      }
    createJikkomonObject(data.results)
  }

  useEffect(() => {
    getAllJikkomons()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  return (

    <Provider store={ store }>
      <div>
        <h1 className="main-title">Jikkodex App</h1>
        <form>
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control mt-2 mb-2"
              placeholder="Search your Jikkomon"
              autoComplete="off"
              name="searchText"
            />
            <button className="btn btn-outline-secondary mt-2 mb-2" type="button" id="button-addon2">Search</button>
          </div>
        </form>
      </div>
      <hr/>

      <div className="row">
        {
          allJikkomons.map( jikkomon => (
            <JikkomonGridItems
              className="col-sm"
              id={ jikkomon.id }
              name={ jikkomon.name }
              image={ jikkomon.sprites.other.dream_world.front_default }
              type={ jikkomon.types[0].type.name }
              abilities={ jikkomon.abilities }
              key={ jikkomon.id }
            />
          ) )
        }
      </div>

      <button className="btn btn-secondary" onClick={ () => getAllJikkomons() } >Load more Jikkomons</button>

      <JikkomonModal>
        <JikkomonDetails/>
      </JikkomonModal>
    </Provider>
  )
}