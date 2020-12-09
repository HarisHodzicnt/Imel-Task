import "./App.css"
import React, { useEffect, useState } from "react"
import {
  BrowserRouter as Router,
  NavLink,
  Route,
  Switch,
} from "react-router-dom"
import Cart from "./checkout/Cart"
import menuIcon from "./images/menu-icon.png"
import logo from './images/logo.svg'

function NavBar({ cartQuantity, showMenu, handleShowMenu }) {
  const [activeDropDown, setActiveDropDown] = useState()

  const handleDropDown = (e) => {
    e.preventDefault()
    setActiveDropDown(!activeDropDown)
    handleShowMenu(!showMenu)
  }

  return (
    <div style={{ background: "white" }}>
      <nav className="App-navbar">
        <ul className="navbar-left">
          <li id="Women">
            <NavLink
              to="/women"
              activeClassName="active-tab"
              className="link-tab"
            >
              Women
            </NavLink>
          </li>
          <li id="Men">
            <NavLink
              to="/men"
              activeClassName="active-tab"
              className="link-tab"
            >
              Men
            </NavLink>
          </li>
          <li id="Sale">
            <NavLink
              to="/sale"
              activeClassName="active-tab"
              className="link-tab"
            >
              Sale
            </NavLink>
          </li>
        </ul>
        <NavLink to="/" activeClassName="active-tab" className="link-tab">
          <img src={logo}/>
        </NavLink>

        <ul className="navbar-right">
          <li id="WoContactmen">
            <NavLink
              to="/contact"
              activeClassName="active-tab"
              className="link-tab"
            >
              Contact
            </NavLink>
          </li>
          <li id="Sign In">
            <NavLink
              to="/signIn"
              activeClassName="active-tab"
              className="link-tab"
            >
              Sign In
            </NavLink>
          </li>
          <li id="Cart" onClick={handleDropDown}>
            <NavLink to="#" activeClassName="active-tab" className="link-tab">
              Cart
              <span className="cart-counter">{cartQuantity}</span>
            </NavLink>
          </li>
        </ul>

        <section className="menu-mobile" onClick={handleDropDown}>
          <img src={menuIcon} style={{ maxWidth: "25px" }} />
        </section>
      </nav>
      {activeDropDown || showMenu ? (
        <div className="cart-dropdown">
          <Cart activeDropDown showMenu />
          <a href="/checkout" className="cart-dropdown-button">
            Checkout
          </a>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  )
}

export default NavBar
