import { useState } from 'react';
import { JikkomonGrid } from './components/JikkomonGrid';
import { Search } from './components/Search';
import './JikkodexApp.css';


export const JikkodexApp = () => {

  const [categories, setCategories] = useState([]);

  // const handleAdd = () => {
  //   setCategories( cats => ['beedrill', ...cats] )
  // }

  return (
    <>
      <h2>Jikkodex App</h2>
      <Search setCategories={ setCategories } />
      <hr/>

      <ul>
        {
          categories.map( category => (
            <JikkomonGrid
              key={ category }
              category={ category }

            />
          ))
        }
      </ul>
    </>
  )
}