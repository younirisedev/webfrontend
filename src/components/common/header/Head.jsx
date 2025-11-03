import React from "react";
import "./header.css";

const Head = () => {
  return (
    <section className="head">
      <div className="container flexSB">
        {/* Logo Section */}
        <div className="logo flex">
          <img
            src="/images/logo.png" // ✅ place logo.png inside public/images/
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
          <i className="fab fa-facebook-f icon"></i>
          <i className="fab fa-instagram icon"></i>
          <i className="fab fa-twitter icon"></i>
          <i className="fab fa-youtube icon"></i>
        </div>
      </div>
    </section>
  );
};

export default Head;

