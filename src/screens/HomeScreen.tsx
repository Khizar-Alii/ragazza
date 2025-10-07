// import HeroComponent from "../components/hero/heroComponent"
import Incipit from "../components/incipit/incipit"
import Introduction from "../components/Introduction/introduction"
import SlideShowComp from "../components/slideShowComp/slideShowComp"
import Synopsis from "../components/synopsis/synopsis"
import TextImageSection from "../components/textImageSection/textImageSection"
import TwoColumnSection from "../components/twoColumnSection/twoColumnSection"

const HomeScreen = () => {
  return (
    <div>
        <div className="gradientSection ">
          <TextImageSection />
        {/* <HeroComponent /> */}
          <Introduction />
          <Synopsis />
          <TwoColumnSection />
          {/* <ThreeColumnSection /> */}
          <h1 className="homeHeading">Ricordi in immagini</h1>
          <SlideShowComp />
          <Incipit />
        </div>
    </div>
  )
}

export default HomeScreen