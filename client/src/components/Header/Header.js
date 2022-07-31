import React from 'react'
import './Header.css'

function Header() {
  return (
    <div className='header'>
    <div className="container">
        <p className="logo">NETFLIX</p>
        <a href="#">Home</a>
        <a href="#">Movies</a>
        <a href="#">Series</a>
        <a href="#">Login</a>
    </div>
    </div>
  )
}

export default Header