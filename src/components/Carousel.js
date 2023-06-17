import React from 'react'
import CImages from './CImages'
import slide1 from '../img/1WB-Walls.jpeg'
import slide2 from '../img/2WB-9to12.jpeg'
import slide3 from '../img/3WB-Bachat.jpeg'

export default function Carousel() {
    return (
        <div >
            <div>
                <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                    <CImages  sourceImg = {slide1}  />
                <CImages  sourceImg = {slide2}   />
                <CImages  sourceImg = {slide3}  />
                    </div>
                </div>
            </div >
            </div >
            )
}
