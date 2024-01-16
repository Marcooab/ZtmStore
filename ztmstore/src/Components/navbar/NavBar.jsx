import React from 'react'
import "./NavBar.scss"
import { Outlet, Link } from 'react-router-dom'

import { ReactComponent as Logo} from "../../assets/086 crown.svg"

function NavBar() {
  return (
    <div>
      <nav className="navbar-container">
        <Link className="logo" to="/">
          <Logo />
        </Link>
        <ul className="nav-list">
          <Link className="nav-items" to="/">Home</Link>
          <Link className="nav-items" to="/shop" >Shop</Link>
          <Link className="nav-items" to="/sign-in">Sign In</Link>
        </ul>
      </nav>
      <Outlet />
    </div>
  )
}

export default NavBar;