import React from 'react'
import './index.css'
/**
 * Create header of card view.
 * @returns returns card's header. In the future I could receive the "my balance" parameter.
 */
function CardTop() {
  return (
    <div
    className="card-header card text-light border-0  p-4" 
    id = "card-header"
    
  >
    <div className="position-absolute">
      <h6 className="opacity-50"> My balance</h6>
      <h4>$921.48</h4>
    </div>

    <div className="d-inline-flex">
      <div className='circle1' id = "circles-header1">
      </div>
      <div className='circle2' id = "circles-header2">
      </div>
    </div>
  </div>
  )
}

export {CardTop}