import React from 'react'

import '../styles/components/JikkomonGridItems.css'

export const JikkomonGridItems = ({ name, image }) => {
  return (
    <div className="rounded card text-center shadow p-3 mb-5">
      <div class="card-header">
        { name }
      </div>
      <div className="card-body">
        <img className="rounded card-img-top" src={ image } alt={ name } />
        <a className="btn btn-outline-dark btn-sm" href="#">See details</a>
      </div>
    </div>
  )
}

