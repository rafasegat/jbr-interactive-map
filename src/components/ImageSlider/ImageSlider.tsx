import React, { useRef } from 'react';
import Slider from 'react-slick';
import './ImageSlider.scss';
import '../../assets/style/slick.scss';
import RoundedArrowLeft from '../Icons/RoundedArrowLeft';
import RoundedArrowRight from '../Icons/RoundedArrowRight';

interface ImageSliderProps {
  images: string[];
}

const ImageSlider: React.FC<ImageSliderProps> = ({ images }) => {
  const sliderRef = useRef<Slider>(null);

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
            <img src={image} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </Slider>

      {images.length > 1 && (
        <>
          <button
            type="button"
            className="slider-button slider-button-prev"
            onClick={goToPrevious}
            aria-label="Previous image"
          >
            <RoundedArrowLeft />
          </button>

          <button
            type="button"
            className="slider-button slider-button-next"
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
