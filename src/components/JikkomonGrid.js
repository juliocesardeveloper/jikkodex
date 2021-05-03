import React, { useEffect, useState } from 'react'
import { JikkomonGridItems } from './JikkomonGridItems';

export const JikkomonGrid = ({ category }) => {

  const [items, setItems] = useState([]);

  useEffect(() => {
    getJikkomonsList();

  }, [])

  const getJikkomonsList = async() => {
    const baseUrl = `https://pokeapi.co/api/v2/pokemon/`;
    const resp = await fetch( baseUrl );
    const data = await resp.json();
    const results = data.results;
    const jikkomons = results.map( name => {
      return {
        name: name.name,
        url: name.url
      }
    })
    // console.log( jikkomons );
    setItems( jikkomons )
  }

  return (
    <div>
      <h3> { category } </h3>
        {
          items.map( name => (
            <JikkomonGridItems key={ name } { ...name } />
          ))
        }
    </div>
  )
}