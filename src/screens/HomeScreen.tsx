import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import Incipit from "../components/incipit/incipit";
import Introduction from "../components/Introduction/introduction";
import SlideShowComp from "../components/slideShowComp/slideShowComp";
import Synopsis from "../components/synopsis/synopsis";
import TextImageSection from "../components/textImageSection/textImageSection";

const HomeScreen = () => {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScroll(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* Page Content */}
      <div className="gradientSection">
        <TextImageSection />
        <Introduction />
        <Synopsis />
        <h1 className="homeHeading">Ricordi in immagini</h1>
        <SlideShowComp />
        <Incipit />
      </div>

      {/* Scroll To Top Button */}
      {showScroll && (
        <button
          className={`scrollToTopBtn ${showScroll ? "show" : ""}`}
          onClick={scrollToTop}
        >
          <FaArrowUp />
        </button>
      )}
    </>
  );
};

export default HomeScreen;
