import React from 'react'

export default function Card(props) {
    return (


        <div className='col col-lg-3'>
            <div class="card" style={{ width: "18rem" }}>
                <img src={props.img} class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">{props.title}</h5>
                    <p class="card-text">{props.desc}</p>
                    <button class="btn btn-primary">{props.price}</button>
                </div>
            </div>
        </div>

    )
}
