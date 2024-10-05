import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import img1 from '../../assets/Slider/slider1.jpg';
import img2 from '../../assets/Slider/slider2.jpg';
const HeroCarousel = () => {
  const slides = [
    {
      image: img1,
    },
    {
      image: img2,
    },
  ];

  // Slick settings
  const settings = {
    dots: false, // Remove dots for navigation
    infinite: true, // Infinite loop sliding
    speed: 500, // Transition speed
    autoplay: true, // Auto slide
    autoplaySpeed: 3000, // Delay for auto slide (3 seconds)
    slidesToShow: 1, // Number of slides to show at once
    slidesToScroll: 1, // Number of slides to scroll
    centerMode: true, // Center the active slide
    centerPadding: '0', // Padding on left and right
    arrows: true, //ding on left and right
  };

  return (
    <div className="relative">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="relative h-[70vh] md:h-[80vh] w-full">
            <img
              src={slide.image}
              alt={`Slide ${index + 1}`}
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center">
              <h2 className="text-white text-3xl md:text-5xl font-bold">
                {slide.text}
              </h2>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default HeroCarousel;
