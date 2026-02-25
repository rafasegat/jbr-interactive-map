import React, { useRef, useState } from 'react';
import Slider from 'react-slick';
import './ImageSlider.scss';
import '../../assets/style/slick.scss';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
import RoundedArrowLeft from '../Icons/RoundedArrowLeft';
import RoundedArrowRight from '../Icons/RoundedArrowRight';

interface ImageSliderProps {
  images: { url: string; title?: React.ReactNode }[];
}

const ImageSlider: React.FC<ImageSliderProps> = ({ images }) => {
  const sliderRef = useRef<Slider>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  if (!images || images.length === 0) {
    return null;
  }

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false, // We'll use custom buttons instead
    adaptiveHeight: false,
    beforeChange: (current: number, next: number) => setCurrentSlide(next),
  };

  const goToPrevious = () => {
    sliderRef.current?.slickPrev();
  };

  const goToNext = () => {
    sliderRef.current?.slickNext();
  };

  return (
    <div className="image-slider">
      <Slider ref={sliderRef} {...settings}>
        {images.map((image, index) => (
          <div key={`slide-${index}`} className="slider-slide">
            <div className="slider-slide-content">
              <img src={image.url} alt={`Slide ${index + 1}`} />
              {image.title && (
                <div className="slider-slide-title">{image.title}</div>
              )}
            </div>
          </div>
        ))}
      </Slider>

      {images.length > 1 && (
        <>
          <button
            type="button"
            className={`slider-button slider-button-prev ${currentSlide === 0 ? 'disabled' : ''}`}
            onClick={goToPrevious}
            aria-label="Previous image"
          >
            <RoundedArrowLeft />
          </button>

          <button
            type="button"
            className={`slider-button slider-button-next ${currentSlide === images.length - 1 ? 'disabled' : ''}`}
            onClick={goToNext}
            aria-label="Next image"
          >
            <RoundedArrowRight />
          </button>
        </>
      )}
    </div>
  );
};

export default ImageSlider;
