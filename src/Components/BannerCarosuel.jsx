import React, { useRef, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const BannerCarousel = () => {
  const sliderRef = useRef(null);

  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.slickGoTo(0); // Go to the first slide when component mounts
    }
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  return (
    <div className="carousel-container">
      <div className="background-image"></div>
      <Slider ref={sliderRef} {...settings}>
        <div>
          <img src={require('../Assets/Images/Banner/home page content.png')} alt="Image 1" className='img-fluid' />
        </div>
        <div>
          <img src={require('../Assets/Images/Banner/home page content.png')} alt="Image 2" className='img-fluid' />
        </div>
        <div>
          <img src={require('../Assets/Images/Banner/home page content.png')} alt="Image 3" className='img-fluid' />
        </div>
      </Slider>
    </div>
  );
};

export default BannerCarousel;