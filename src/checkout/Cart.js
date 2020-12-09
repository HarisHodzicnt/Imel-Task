import "../App.css"
import React, { useEffect, useState } from "react"
import ImageContainer from "../ImageContainer"
import * as images from '../images/index'
function Cart({
  customerInformation,
  activeProvider,
  handleClearInformations,
}) {
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem("cart")))

  var currency
  var totalProductsPrice = cart ? parseFloat(
          cart?.map((item) => {
            ;
            currency = item.product.currency
            return item.product.discountPrice
              ? item.product.discountPrice * item.quantity
              : item.product.price * item.quantity
          }).reduce((a, b) => a + b, 0)
        )
      : 0
    
  const taxTotal = parseFloat((totalProductsPrice * 0.2).toFixed(2))
  return (
    <div className="cart-container">
      <h2>Cart</h2>
      {cart?.map((item) => (
        <ImageContainer
          key={Math.random() * 1000}
          from="Checkout"
          divClass="cart-product"
          imgSrc={images[item.product.image]?.default}
          spanText={[
            item.product.name,
            `${item.product.currency}${
              item.product.discountPrice
                ? item.product.discountPrice
                : item.product.price
            } x ${item.quantity}`,
          ]}
          pClass="cart-p"
          imageClass="cart-image"
        />
      ))}
      <hr />
      <p className="checkout-totals">
        <span>Subtotal</span>
        <span>
          {currency}
          {totalProductsPrice}
        </span>
      </p>
      <p className="checkout-totals">
        <span>Taxes</span>
        <span>
          {currency}
          {taxTotal}
        </span>
      </p>
      <hr />
      <p className="checkout-totals">
        <span>Total</span>
        <span>
          {currency}
          {totalProductsPrice + taxTotal}
        </span>
      </p>
    </div>
  )
}

export default Cart
