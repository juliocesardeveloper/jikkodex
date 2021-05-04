import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { uiCloseModal } from '../actions/ui'

import '../styles/components/JikkomonDetails.css'

export const JikkomonDetails = () => {

  const dispatch = useDispatch()

  const { jikkomon } = useSelector(state => state.ui)
  
  const abilities = jikkomon.abilities;

  const closeModal = () => {
    dispatch( uiCloseModal() );
  }

  return (
    <div className="card card-detail text-center">
      <button onClick={ closeModal } type="button" className="btn-close text-end" aria-label="Close"></button>
      <div className="card-header">
        <h5> #{ jikkomon.id } </h5>
      </div>
      <img className="rounded card-img-top image-details" src={ jikkomon.image } alt={ jikkomon.name } />
      <div className="card-body">
        <h2 className="card-title"> { jikkomon.name } </h2>
        <h4> Type: { jikkomon.type } </h4>
      </div>
      <div className="card-body">
        <h4>Abilities:</h4>
        <ul className="list-group list-group-flush">
          {
            abilities.map( ability =>
              <li key={ ability.ability.name } className="list-group-item"> { ability.ability.name } </li>
            )
          }
        </ul>
      </div>
    </div>
  )
}