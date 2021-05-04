import React from 'react'

import '../styles/components/JikkomonDetails.css'

export const JikkomonDetails = ({ id, image, name, type, abilities  }) => {
  return (
    <div className="card card-detail">
      <div class="card-header">
        #{ id }
      </div>
      <img className="rounded card-img-top" src={ image } alt={ name } />
      <div className="card-body">
        <h2 className="card-title"> { name } </h2>
        <h4> { type } </h4>
      </div>
      <div className="card-body">
        <ul className="list-group list-group-flush">
          <li className="list-group-item"> { abilities } </li>
          <li className="list-group-item"> { abilities } </li>
        </ul>
      </div>
    </div>
  )
}