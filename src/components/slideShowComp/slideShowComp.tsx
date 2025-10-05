import { useState, useRef, useEffect } from "react";
import styles from "./slideShowComp.module.css";

const imageModules = import.meta.glob<{
  default: string;
}>("../../assets/slideshow/*.{png,jpg,jpeg}", { eager: true });

const images = Object.keys(imageModules)
  .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))
  .map((key) => imageModules[key].default);
  
const SlideShowComp = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const touchStartX = useRef<number | null>(null);

  /** ---------- Slideshow Navigation ---------- */
  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  /** ---------- Lightbox Navigation ---------- */
  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setIsLightboxOpen(true);
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
  };

  const goToPreviousLightbox = () => {
    setLightboxIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNextLightbox = () => {
    setLightboxIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  /** ---------- Mobile Swipe Support ---------- */
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;

    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        isLightboxOpen ? goToNextLightbox() : goToNext();
      } else {
        isLightboxOpen ? goToPreviousLightbox() : goToPrevious();
      }
    }
    touchStartX.current = null;
  };

  /** ---------- Keyboard Navigation ---------- */
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (isLightboxOpen) {
        if (e.key === "ArrowRight") goToNextLightbox();
        if (e.key === "ArrowLeft") goToPreviousLightbox();
        if (e.key === "Escape") closeLightbox();
      } else {
        if (e.key === "ArrowRight") goToNext();
        if (e.key === "ArrowLeft") goToPrevious();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isLightboxOpen]);

  /** ---------- Visible Images Calculation ---------- */
  const getVisibleImages = () => {
    const visibleCount = 5; // show 5 images on desktop
    const result = [];
    for (let i = 0; i < visibleCount; i++) {
      const index = (currentIndex + i) % images.length;
      result.push({ src: images[index], originalIndex: index });
    }
    return result;
  };

  const visibleImages = getVisibleImages();

  return (
    <>
      <div className={`${styles.slideshowContainer} pageContainer`}>
        <button
          className={`${styles.navButton} ${styles.prevButton}`}
          onClick={goToPrevious}
          aria-label="Previous"
        >
          ‹
        </button>

        <div
          className={styles.imagesWrapper}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {visibleImages.map((image, idx) => (
            <div
              key={idx}
              className={styles.imageCard}
              onClick={() => openLightbox(image.originalIndex)}
            >
              <img src={image.src} alt={`Slide ${image.originalIndex + 1}`} />
            </div>
          ))}
        </div>

        <button
          className={`${styles.navButton} ${styles.nextButton}`}
          onClick={goToNext}
          aria-label="Next"
        >
          ›
        </button>
      </div>

      {/* ---------- Lightbox ---------- */}
      {isLightboxOpen && (
        <div
          className={styles.lightbox}
          onClick={closeLightbox}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <button
            className={styles.closeLightbox}
            onClick={closeLightbox}
            aria-label="Close"
          >
            ✕
          </button>

          <button
            className={`${styles.lightboxNav} ${styles.lightboxPrev}`}
            onClick={(e) => {
              e.stopPropagation();
              goToPreviousLightbox();
            }}
            aria-label="Previous"
          >
            ‹
          </button>

          <div
            className={styles.lightboxImage}
            onClick={(e) => e.stopPropagation()}
          >
            <img src={images[lightboxIndex]} alt={`Image ${lightboxIndex + 1}`} />
          </div>

          <button
            className={`${styles.lightboxNav} ${styles.lightboxNext}`}
            onClick={(e) => {
              e.stopPropagation();
              goToNextLightbox();
            }}
            aria-label="Next"
          >
            ›
          </button>
        </div>
      )}
    </>
  );
};

export default SlideShowComp;
