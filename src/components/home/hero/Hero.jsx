import React from "react";
import { Typewriter } from "react-simple-typewriter";
import Heading from "../../common/heading/Heading";
import Globe from "../../common/globe/Globe";
import "./Hero.css";

const Hero = () => {
  return (
    <>
      <section className="hero">
        <div className="globe-background">
          <Globe />
        </div>

        <div className="hero-content">
          <Heading
            subtitle="WELCOME TO ACADEMIA"
            title={
              <span style={{ color: "#0854a6ff" }}>
                <Typewriter
                  words={[
                    "Best Online Education Expertise",
                    "Learn Anywhere, Anytime",
                    "Empower Your Future",
                  ]}
                  loop={true}
                  cursor
                  cursorStyle="|"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={2000}
                />
              </span>
            }
          />

            <p>Empowering students and professionals to achieve their goals through flexible and accredited distance education programs.
          </p>

          <div className="hero-search">
  <input
    type="text"
    placeholder="Search for courses, universities, or programs..."
    className="search-input"
  />
  <button className="search-btn">
    <i className="fa fa-search"></i> Search
  </button>
</div>

        </div>
      </section>

      <div className="margin"></div>
    </>
  );
};

export default Hero;
