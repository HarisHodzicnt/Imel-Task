import logo from "./logo.svg"
import "./App.css"
import HomePage from "./HomePage"
import Category from "./Category"
import NavBar from "./NavBar"
import Footer from "./Footer"
import Checkout from "./checkout/CheckOut"
import {
  BrowserRouter as Router,
  NavLink,
  Route,
  Switch,
} from "react-router-dom"
import ProductPage from "./ProductPage"
import NoRoute from "./NoRoute"

import { useEffect, useState } from "react"

function App() {
  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart"))
    var quantity = cart ? parseInt(cart?.map((item) => item.quantity).reduce((a, b) => a + b, 0)) : 0
    setCartQuantity(quantity)
  }, [])

  const [cartQuantity, setCartQuantity] = useState()
  const [showMenu, setShowMenu] = useState()

  const updateCartQuantity = () => {
    setCartQuantity(cartQuantity + 1)
    setShowMenu(true)
  }

  const handleShowMenu = (value) => {
    setShowMenu(value)
  }
  return (
    <Router>
      <div className="App">
        <header>
          {window.location.pathname !== "/checkout" ? (
            <NavBar
              cartQuantity={cartQuantity}
              showMenu={showMenu}
              handleShowMenu={handleShowMenu}
            />
          ) : (
            false
          )}
        </header>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/women">
            <Category />
          </Route>
          <Route exact path="/men">
            <Category />
          </Route>
          <Route exact path="/men/:id">
            <ProductPage updateCartQuantity={updateCartQuantity} />
          </Route>
          <Route exact path="/women/:id">
            <ProductPage updateCartQuantity={updateCartQuantity} />
          </Route>
          <Route exact path="/checkout">
            <Checkout />
          </Route>
          <Route>
            <NoRoute />
          </Route>
        </Switch>
      </div>
      <footer>
        <Footer />
      </footer>
    </Router>
  )
}

export default App
