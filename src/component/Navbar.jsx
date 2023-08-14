import React from 'react'
import '../css/navbar.css'

const Navbar = () => {
  return (
    <div id="navbar">
            <div className="navbar_logo">
                <img src="https://www.productvideoexamples.com/_nuxt/product_video_examples_logo.ce3a8ea9.png" alt="" srcset=""  id='main-logo' />
            </div>
        <ul id='navbar-ul'>
            <li id='navbar-list'>Features</li>
            <li id='navbar-list'>Pricing</li>
            <li id='navbar-list'>Login</li>
            <button id='navbar-btn'> Get Access Now </button>
        </ul>
    </div>
  )
}

export default Navbar