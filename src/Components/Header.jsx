import React from 'react'
import logo from '../images/logo.svg'
import Navbar from './Navbar'
import '../css/header.css'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <header>
      <Link to='/'>
        <img src={logo} alt="logo"/>
      </Link>
      <Navbar />
    </header>
  )
}

export default Header
