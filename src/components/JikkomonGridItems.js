import React, { useEffect, useState } from 'react'

export const JikkomonGridItems = ({ name }) => {

  const [jikkos, setJikkos] = useState([])

  useEffect(() => {
    getJikkomons();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const getJikkomons = async() => {
    const url = `https://pokeapi.co/api/v2/pokemon/${ name }`;
    const resp = await fetch( url );
    const data = await resp.json();
    console.log(data);
    setJikkos(data);
  }

  return (
    <div>
      {
        jikkos.map( item => (
          <div>
            <h2>{item.name}</h2>
            {/* <img src={item.sprites.back_default} alt={ item.name } /> */}
          </div>
        ))
      }
    </div>
  )
}
