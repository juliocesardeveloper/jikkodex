import { useEffect, useState } from 'react';
import { store } from './store/store';
import { Provider } from 'react-redux';
import { Search } from './components/Search';
import { JikkomonGridItems } from './components/JikkomonGridItems';
import { JikkomonModal } from './components/JikkomonModal';
import { JikkomonDetails } from './components/JikkomonDetails';
import './JikkodexApp.css';


export const JikkodexApp = () => {

  

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
    await console.log(allJikkomons);
  }

  useEffect(() => {
    getAllJikkomons()
  }, [])

  return (
    <Provider store={ store }>
      <h2>Jikkodex App</h2>
      <Search />
      <hr/>

      <div className="container">
        <div className="row">
          {
            allJikkomons.map( jikkomon =>
              <JikkomonGridItems
                className="col-sm"
                id={ jikkomon.id }
                name={ jikkomon.name }
                image={ jikkomon.sprites.other.dream_world.front_default }
                type={ jikkomon.types[0].type.name }
                abilities={ jikkomon.abilities }
                // abilitie2={ jikkomon.abilities[1].ability.name }
                key={ jikkomon.id }
              />
            )
          }
        </div>
      </div>

      <button className="btn btn-secondary">Load more Jikkomons</button>

      <JikkomonModal>
        <JikkomonDetails
          // id={ allJikkomons[ { itemId } ].id }
          // image
          // name
          // type
          // abilities
        />

      </JikkomonModal>
    </Provider>
  )
}