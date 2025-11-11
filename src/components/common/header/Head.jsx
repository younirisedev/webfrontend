import React from "react";
import "./header.css";

const Head = () => {
  return (
    <section className="head">
      <div className="container flexSB">
        {/* Logo Section */}
        <div className="logo flex">
          <img
            src="/images/logo.png" 
            alt="Academia Logo"
            className="logo-img"
          />
          <div className="logo-text">
            <h1>Younirise</h1>
            <span>EDUCATION</span>
          </div>
        </div>

        {/* Social Icons */}
        <div className="social">
  <a href="https://www.facebook.com/profile.php?id=61583162072571" target="_blank" rel="noopener noreferrer">
    <i className="fab fa-facebook-f icon"></i>
  </a>
  <a href="https://www.instagram.com/youniriseeducation/" target="_blank" rel="noopener noreferrer">
    <i className="fab fa-instagram icon"></i>
  </a>
  <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer">
    <i className="fab fa-twitter icon"></i>
  </a>
  <a href="https://www.youtube.com/yourchannel" target="_blank" rel="noopener noreferrer">
    <i className="fab fa-youtube icon"></i>
  </a>
  <a href="https://www.linkedin.com/company/younirise-education/?viewAsMember=true" target="_blank" rel="noopener noreferrer">
    <i className="fab fa-linkedin-in icon"></i>
  </a>
</div>

      </div>
    </section>
  );
};

export default Head;

