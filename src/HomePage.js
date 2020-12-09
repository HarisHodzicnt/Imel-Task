import "./App.css"
import ImageContainer from "./ImageContainer"
import * as images from "./images/index"
function HomePage(props) {
  return (
    <div className="Container">
      <section className="App-header">
        <div className="App-header-left">
          <ImageContainer
            from="Home"
            divClass="left-top"
            link="/women"
            imgSrc={images.women1Home.default}
            spanText="Women"
            imageClass="Sale-header-left-img1"
          />
          <ImageContainer
            from="Home"
            divClass="left-bottom"
            link="/women"
            imgSrc={images.women1ShoesHome.default}
            spanText="Sale (Women)"
            pClass="Sale-header-left-span"
            imageClass="Sale-header-left-img2"
          />
        </div>
        <div className="App-header-right">
          <ImageContainer
            from="Home"
            link="/men"
            imgSrc={images.men1Home.default}
            spanText="Men"
            imageClass="Sale-header-right-img1"
          />
          <ImageContainer
            from="Home"
            divClass="right-bottom"
            link="/men"
            imgSrc={images.men1LegsHome.default}
            spanText="Sale (Men)"
            pClass="Sale-header-right-span"
            imageClass="Sale-header-right-img2"
          />
        </div>
      </section>

      <section className="App-content">
        <ImageContainer
          divClass="App-content-div1"
          link="/men"
          imgSrc={images.greyManHome.default}
          imageClass="App-content-img1"
        />
        <ImageContainer
          divClass="App-content-div2"
          link="/women"
          imgSrc={images.grayWomanHome.default}
          imageClass="App-content-img2"
        />
      </section>
    </div>
  )
}

export default HomePage
