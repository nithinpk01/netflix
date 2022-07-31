import React from 'react'
import './Banner.css'

function Banner() {
  return (
    <div className='banner'>
        <div className="content">
            <div className="banner-buttons">
                <button className="btn">Play</button> 
                <button className="btn">My List</button>
            </div>
        </div>
        <div className="fade"></div>
    </div>
  )
}

export default Banner