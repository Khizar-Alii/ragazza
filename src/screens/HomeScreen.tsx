import HeroComponent from "../components/hero/heroComponent"
import SlideShowComp from "../components/slideShowComp/slideShowComp"
import ThreeColumnSection from "../components/threeColumnSection/threeColumnSection"
import TwoColumnSection from "../components/twoColumnSection/twoColumnSection"

const HomeScreen = () => {
  return (
    <div>
        <HeroComponent />
        <div className="gradientSection ">
          <TwoColumnSection />
          <ThreeColumnSection />
          <h1 className="homeHeading">Ricordi in immagini</h1>
          <SlideShowComp />
        </div>
    </div>
  )
}

export default HomeScreen