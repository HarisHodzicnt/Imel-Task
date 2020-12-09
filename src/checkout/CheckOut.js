import "../App.css"
import React, { useEffect, useState } from "react"
import {
  BrowserRouter as Router,
  NavLink,
  Route,
  Switch,
} from "react-router-dom"
import ImageContainer from "../ImageContainer"
import * as db from "../DataBase"
import { logDOM } from "@testing-library/react"
import leftArrow from "../images/left-arrow.svg"
import logo from "../images/logo.svg"
import Information from "./Information"
import Payment from "./Payment"
import Confirm from "./Confirm"
import Cart from "./Cart"

function Checkout() {
  const [activeProvider, setActiveProvider] = useState()
  const [activeStep, setActiveStep] = useState("Information")

  const [customerInformation, setCustomerInformation] = useState({})
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem("cart")))
  const [activeMessage, showThanksMessage] = useState()
  const handleChange = (e) => {
    setCustomerInformation({
      ...customerInformation,
      [e.target.id]: e.target.value,
    })
  }

  const handleStep = (e) => {
    setActiveStep(e.target.id)
  }

  const handlePayment = (e) => {
    setActiveProvider(e.target.id)
  }

  const handleClearInformation = () => {
    setCustomerInformation({})
    localStorage.clear("cart")
    setCart()
    showThanksMessage(true)
    setTimeout(() => {
      showThanksMessage(false)
      setActiveStep("Information")
    }, 2500)
  }

  const windowWidth = window.innerWidth
  return (
    <div className="checkout">
      <div className="checkout-left-side">
        <img src={logo} />
        <div className="checkout-container">
          <ul className="breadcrumb">
            <li
              id="Information"
              onClick={handleStep}
              className={activeStep == "Information" ? "active-step" : "step"}
            >
              Information
            </li>
            <li>
              <img src={leftArrow} />
            </li>
            <li
              id="Payment"
              onClick={handleStep}
              className={activeStep == "Payment" ? "active-step" : "step"}
            >
              Payment
            </li>
            <li>
              <img src={leftArrow} />
            </li>
            <li
              id="Confirm"
              onClick={handleStep}
              className={activeStep == "Confirm" ? "active-step" : "step"}
            >
              Confirm
            </li>
          </ul>
          {activeStep == "Information" ? (
            <Information
              handleChange={handleChange}
              handleStep={handleStep}
              customerInformation={customerInformation}
              handleStep={handleStep}
            />
          ) : activeStep == "Payment" ? (
            <Payment
              handlePayment={handlePayment}
              activeProvider={activeProvider}
              customerInformation={customerInformation}
              handleStep={handleStep}
            />
          ) : activeMessage ? (
            <div style={{ textAlign: "left" }}>
              <p style={{ marginTop: "60px", fontSize: "20px" }}>
                Thank you for your order
              </p>
              <p style={{ marginTop: "25px", fontSize: "12px" }}>
                The order will be processed within next 48h.
              </p>
            </div>
          ) : (
            <Confirm
              customerInformation={customerInformation}
              activeProvider={activeProvider}
              handleStep={handleStep}
              handleClearInformations={handleClearInformation}
            />
          )}
        </div>
      </div>
      {windowWidth > 900 || activeStep == "Confirm" ? (
        <div className="checkout-right-side">
          <Cart />
        </div>
      ) : (
        false
      )}
    </div>
  )
}

export default Checkout
