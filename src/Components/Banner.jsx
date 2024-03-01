import React from 'react';
import Slider from 'react-slick';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


import banner1 from '../Assets/Images/Banner/home page content.png';

const BannerCarousel = () => {
  const images = [
    { id: 1, img: banner1 },
    { id: 2, img: banner1 },
    { id: 3, img: banner1 },
  ];

  const CustomPrevArrow = function(props) {
    const { className, onClick } = props;
    return <FaArrowLeft className={`${className} custom-prev-arrow`} onClick={onClick} />;
  };

  const CustomNextArrow = function(props) {
    const { className, onClick } = props;
    return <FaArrowRight className={`${className} custom-next-arrow`} onClick={onClick} />;
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };

  return (
    <div className='Banner'>
      <div className='Banner-slider'>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <img src={image.img} className='banner-image img-fluid w-100' alt={`Banner ${index + 1}`} />
          </div>
        ))}
      </Slider>
      </div>
    </div>
  );
};

export default BannerCarousel;
