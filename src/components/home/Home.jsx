import React from "react";
import AboutCard from "../about/AboutCard";

import HAbout from "./HAbout";
import Hero from "./hero/Hero";

import Testimonal from "./testimonal/Testimonal";
import UniversityCarousel from "../university/UniversityCarousel";
import Degrees from "../Degrees/Degrees"; // ✅ matches folder name "Degrees"
import AuthPopup from "../auth/AuthPopup";


const Home = () => {
  return (
    <>
      <Hero />
      <AuthPopup />
      <UniversityCarousel />
      <Degrees /> 
      <AboutCard />
      <HAbout />
      <Testimonal />
      
       {/* Add Degrees section here */}
    </>
  );
};

export default Home;
