import React from 'react'
import "./HeaderSlider.scss"
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import images from "../../utils/images"


const HeaderSlider = () => {
  let settings = {
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div className='slider'>
      <div className='container'>
        <div className='slider-content overflow-x-hidden'>
          <Slider {...settings}>
            <div className='slider-item'>
              <img src={images[0]} alt="img" />
            </div>
            <div className='slider-item'>
              <img src={images[1]} alt="img" />
            </div>
          </Slider>
        </div>
      </div>
    </div>
  )
}

export default HeaderSlider