import "./App.css"
import {
  product1Women,
  product2Women,
  product3Women,
  product4Women,
  product1Men,
} from "./images"
function ImageContainer(props) {
  const returnSpans = () => {
    var element
    switch (props.from) {
      case "Home":
        var textArray = props.spanText
          ? props.spanText.split(" ")
          : [props.spanText]
        element = textArray.map((text) =>
          text == "Sale" && text != "" ? (
            <span key={Math.random() * 1000} style={{ color: "red" }}>
              {text}
            </span>
          ) : (
            <span key={Math.random() * 1000}>{text}</span>
          )
        )
        break
      case "Category":
        element = props.spanText.map((text, index) => {
          return index == 0 ? (
            <p key={Math.random() * 1000 * index} style={{ display: "block" }}>
              {text}
            </p>
          ) : (
            <span
              key={Math.random() * 1000 * index}
              style={{
                color: index == 1 ? "#E01A1A" : "#999999",
                textDecoration: index == 2 ? "line-through" : "none",
              }}
            >
              {text && text != "" ? props.currency : false}
              {text}
            </span>
          )
        })
        break
      case "ProductPage":
        element = props.spanText.map((text, index) => {
          return index == 0 ? (
            <p key={Math.random() * 1000 * index} style={{ display: "block" }}>
              {text}
            </p>
          ) : (
            <span
              key={Math.random() * 1000 * index}
              style={{
                color: index == 1 ? "#E01A1A" : "#999999",
                textDecoration: index == 2 ? "line-through" : "none",
              }}
            >
              {text && text != "" ? props.currency : false}
              {text}
            </span>
          )
        })
        break
      case "Checkout":
        element = props.spanText.map((text, index) => {
          return index == 0 ? (
            <p key={Math.random() * 1000 * index}>{text}</p>
          ) : (
            <p key={Math.random() * 1000}>{text}</p>
          )
        })
        break
      default:
        break
    }
    return element
  }

  return (
    <a
      href={props.link}
      onClick={
        props.from == "ProductPageVariants"
          ? (e) => {
              e.preventDefault()
              props.handleActiveImage(e)
            }
          : () => {}
      }
      className={props.divClass}
    >
      {props.imgSrc && props.from != "Checkout" ? (
        <img src={`${props.imgSrc}`} className={props.imageClass} />
      ) : (
        <div
          className={props.imageClass}
          style={{ backgroundImage: `url(${props.imgSrc})` }}
        ></div>
      )}
      {props.spanText ? (
        <div className={props.pClass}>{returnSpans()}</div>
      ) : (
        false
      )}
    </a>
  )
}
export default ImageContainer
