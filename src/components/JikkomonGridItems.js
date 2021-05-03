import React from 'react'

import '../styles/components/JikkomonGridItems.css'

export const JikkomonGridItems = ({ name, image }) => {
  return (
    <div className="card">
      <img className="card-img-top" src={ image } alt=""/>
      <div className="card-body">
        <h4 className="card-title"> { name } </h4>
        <a className="btn btn-primary" href="#">See details</a>
      </div>
    </div>
  )
}

