import React from 'react'
import { useDispatch } from 'react-redux'
import { uiJikkomonData, uiOpenModal } from '../actions/ui'

import '../styles/components/JikkomonGridItems.css'

export const JikkomonGridItems = ({ id, name, image, type, abilities }) => {


  const dispatch = useDispatch();
  // const { jikkomonId, } = useSelector(state => state.ui);

  const handleClick = () => {
    dispatch( uiOpenModal() );
    dispatch( uiJikkomonData( id, name, image, type, abilities ) )

  }


  return (
    <div className="rounded card text-center shadow p-3 mb-5">
      <div className="card-header">
        { name }
      </div>
      <div className="card-body">
        <img className="rounded card-img-top" src={ image } alt={ name } />
        <p onClick={ handleClick } className="btn btn-outline-dark btn-sm">See details</p>
      </div>
    </div>
  )
}

