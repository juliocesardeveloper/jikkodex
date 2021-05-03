import { useEffect, useState } from 'react';
import { JikkomonGrid } from './components/JikkomonGrid';
import { JikkomonGridItems } from './components/JikkomonGridItems';
import { Search } from './components/Search';
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
    <>
      <h2>Jikkodex App</h2>
      <Search />
      <hr/>

      <div className="grid">
        {
          allJikkomons.map( jikkomon => 
            <JikkomonGridItems
              name={ jikkomon.name }
              image={ jikkomon.sprites.other.dream_world.front_default }
              key={ jikkomon.id }
            />
          )
        }
      </div>

      <button>Load more Jikkomons</button>
    </>
  )
}