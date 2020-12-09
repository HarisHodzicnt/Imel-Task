import "./App.css"
import React, { useState } from "react"
import {
  BrowserRouter as Router,
  NavLink,
  Route,
  Switch,
} from "react-router-dom"
import ImageContainer from "./ImageContainer"
import * as db from "./DataBase"
import * as images from "./images/index"
function Category() {
  const products =
    window.location.pathname == "/women" ? db.womemProducts : db.mensProducts

  return (
    <Router>
      <p className="category-title">{`${
        window.location.pathname == "/women" ? "Women" : "Men"
      }`}</p>
      <div className="Container">
        <section className="category-container">
          {products.map((product) => {
            return (
              <ImageContainer
                key={Math.random() * 1000}
                from="Category"
                divClass="category-image-container"
                link={`${window.location.pathname}/${product.id}`}
                imgSrc={images[product.image]?.default}
                spanText={[product.name, product.discountPrice, product.price]}
                currency={product.currency}
                pClass="category-image-container-text"
                imageClass="category-image"
              />
            )
          })}
        </section>
      </div>
      <div style={{ minHeight: "300px" }}></div>
    </Router>
  )
}

export default Category
