import React, { useEffect } from 'react'

export const JikkomonGridItems = ({ name }) => {

  useEffect(() => {
    getJikkomons();
  }, [])

  const getJikkomons = async() => {
    const url = `https://pokeapi.co/api/v2/pokemon/${ name }`;
    const resp = await fetch( url );
    const data = await resp.json();
    console.log(data.name);
  }

  return (
    <div>
      <h3> { name } </h3>
    </div>
  )
}
