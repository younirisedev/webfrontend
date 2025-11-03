import React from "react";
import Slider from "react-slick";
import "./UniversityCarousel.css";

const universities = [
  { name: "Oxford University", logo: "/images/universities/oxford.png" },
  { name: "Harvard University", logo: "/images/universities/harvard.png" },
  { name: "Stanford University", logo: "/images/universities/stanford.png" },
  { name: "MIT", logo: "/images/universities/mit.png" },
  { name: "Cambridge University", logo: "/images/universities/cambridge.png" },
  { name: "University of Toronto", logo: "/images/universities/toronto.png" },
];

const UniversityCarousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1200,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1800,
    pauseOnHover: false,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <section className="university-carousel">
      <h2 className="carousel-title">Our Partner Universities</h2>
      <Slider {...settings}>
        {universities.map((uni, index) => (
          <div key={index} className="university-slide">
            <img src={uni.logo} alt={uni.name} className="university-logo" />
            <p>{uni.name}</p>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default UniversityCarousel;
