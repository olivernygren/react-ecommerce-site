import React from 'react'
import Header from './Header'
import LandingPage from './LandingPage'
import { Link, BrowserRouter as Router } from 'react-router-dom'

function Layout() {
  return (
    <>
      <Router>
        <Header />
        <LandingPage />
      </Router>
    </>
  )
}

export default Layout
