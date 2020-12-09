import React, { useState } from "react"
import * as db from "./DataBase"
import ImageContainer from "./ImageContainer"
import * as images from "./images"

function ProductPage({ updateCartQuantity }) {
  const url = window.location.pathname.split("/")
  const products = url.find((x) => x == "men")
    ? db.mensProducts
    : db.womemProducts
  const urlId = url.find((x) => parseInt(x))
  const product = products?.find((x) => x.id == urlId)
  const [activeImage, setActiveImage] = useState(images[product.image]?.default)

  const addToCart = () => {
    var cart = JSON.parse(localStorage.getItem("cart"))

    var productCart = cart
      ? cart.find((item) => item.product.id == product.id)
      : 0
    if (cart) {
      if (productCart) {
        productCart.quantity += 1
        cart[cart.indexOf(productCart)] = productCart
        localStorage.setItem("cart", JSON.stringify(cart))
      } else {
        cart.push({ product: product, quantity: 1 })
        localStorage.setItem("cart", JSON.stringify(cart))
      }
    } else
      localStorage.setItem(
        "cart",
        JSON.stringify([{ product: product, quantity: 1 }])
      )
    updateCartQuantity()
  }

  const handleActiveImage = (e) => {
    setActiveImage(e.target.src)
  }

  const ProductDescription = () => {
    return (
      <div className="product-desciption">
        <h2>{product.name}</h2>
        <p>
          {product.currency}
          {product.discountPrice ? product.discountPrice : product.price}
        </p>
        {window.innerWidth < 444 ? (
          <div className="product-page-image">
            <div
              className="product-page-backImage"
              style={{ backgroundImage: `url(${activeImage}})` }}
            ></div>
            <div className="product-variants">
              {product.variants?.map((variant) => {
                return (
                  <ImageContainer
                    handleActiveImage={handleActiveImage}
                    key={Math.random() * 1000}
                    from="ProductPageVariants"
                    divClass=""
                    link="#"
                    imgSrc={activeImage}
                    imageClass=""
                  />
                )
              })}
            </div>
          </div>
        ) : (
          false
        )}
        <p>{product.description}</p>
        <ul>
          {product.properties.map((property) => (
            <li key={Math.random() * 1000}>{property}</li>
          ))}
        </ul>
        <p>{product.material}</p>
        <p>{product.sizeDescription}</p>
        <button type="submit" onClick={addToCart}>
          Add to Cart
        </button>
        <p>{product.material}</p>
        <p>{product.customerMessage}</p>
        <p>Product No:</p>
        <p>{product.code}</p>
      </div>
    )
  }

  const MightLike = () => {
    return (
      <section className="might-like">
        <p>You might also like</p>
        {products
          .filter((x) => x.id != product.id)
          .map((product, index) => {
            return index < 3 ? (
              <ImageContainer
                from="ProductPage"
                key={Math.random() * 1000}
                from="ProductPage"
                divClass="might-like-product"
                link={`${product.id}`}
                imgSrc={images[product.image]?.default}
                spanText={[product.name, product.discountPrice, product.price]}
                currency={product.currency}
                imageClass=""
              />
            ) : (
              false
            )
          })}
      </section>
    )
  }

  return (
    <section className="product-page">
      <div className="Container">
        <section className="product-page-container">
          {window.innerWidth > 444 ? (
            <div className="product-page-image">
              <div
                className="product-page-backImage"
                style={{ backgroundImage: `url(${activeImage})` }}
              ></div>
              <div className="product-variants">
                {product.variants?.map((variant) => {
                  return (
                    <ImageContainer
                      handleActiveImage={handleActiveImage}
                      key={Math.random() * 1000}
                      from="ProductPageVariants"
                      divClass={
                        activeImage?.replace("http://localhost:3000", "") ==
                        images[variant.image]?.default
                          ? "active-image"
                          : ""
                      }
                      link="#"
                      imgSrc={images[variant.image]?.default}
                      imageClass=""
                    />
                  )
                })}
              </div>
            </div>
          ) : (
            false
          )}

          {ProductDescription()}
        </section>
        {MightLike()}
      </div>
    </section>
  )
}

export default ProductPage
