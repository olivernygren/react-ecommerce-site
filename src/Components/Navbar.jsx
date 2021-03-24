import React from 'react'
import { Link } from 'react-router-dom'
import '../css/nav.css'
import cartIcon from '../images/cart-icon.svg'
import bagIcon from '../images/bag-icon.svg'

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to='/' className="nav-link">Home</Link>
        </li>
        <li>
          <Link to='/online-coaching' className="nav-link">Online Coaching</Link>
        </li>
        <li>
          <Link to='/training-plans' className="nav-link">Training Plans</Link>
        </li>
        <li>
          <Link to='/nutrition-plans' className="nav-link">Nutrition Plans</Link>
        </li>
        <li>
          <Link to='/contact' className="nav-link">Contact</Link>
        </li>
        <li>
          <Link to='/cart' className="nav-link">
            <img src={bagIcon} alt="Shopping cart"/>
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
