import "../App.css"
import React, { useEffect, useState } from "react"
import * as images from '../images/index'
function Payment({
  handlePayment,
  activeProvider,
  customerInformation,
  handleStep,
}) {
  return (
    <div>
      {Object.keys(customerInformation).length < 7 ? (
        <p className="fill-up-form">
          Please fill up the form in order to procceed. You don't have to fill{" "}
          <strong>(optional)</strong> fields.
        </p>
      ) : (
        <div className="payment">
          <h2>Payment provider</h2>
          <div className="providers">
            {["Paypal", "Stripe", "Pay", "Klarna"].map((provider) => {
              return (
                <div
                  key={Math.random() * 1000}
                  onClick={handlePayment}
                  id={provider}
                  className={
                    activeProvider == provider ? "payment-provider payment-provider-active" : "payment-provider"
                  }
                >
                  <img
                    onClick={handlePayment}
                    id={provider}
                    src={`${images[provider].default}`}
                  />
                </div>
              )
            })}
          </div>
          <div>
            <p></p>
            <button onClick={handleStep} id="Confirm">
              Continue to Confirm
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Payment
