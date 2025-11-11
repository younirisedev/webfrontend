import React from "react";
import Slider from "react-slick";
import "./UniversityCarousel.css";

const universities = [
  { name: "Dr APJ Abdul Kalam University", logo: "/images/universities/apj.jpeg" },
  { name: "RKDF University", logo: "/images/universities/rkdf.jpg" },
  { name: "Sri satya sai University of technology and medical sciences , Sehore", logo: "/images/universities/satya.png" },
  { name: "Sikkim professional university ", logo: "/images/universities/sikkim uni.jpeg" },
  { name: "Bossse board", logo: "/images/universities/Bosse.jpg" },
  { name: "Smolensk State Medical University", logo: "/images/universities/Smolensk.jpeg" },
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
