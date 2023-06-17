import React from 'react'

export default function CImages(props) {
    console.log(props)
  return (
    <div>
        <div className="carousel-item active">
      <img src={props.sourceImg} className="d-block w-100" alt="..."/>
    </div>
    </div>
  )
}
