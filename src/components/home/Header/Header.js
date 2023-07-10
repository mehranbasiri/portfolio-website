import React from "react";
import "./Header.css";
import Head1 from "../../../images/Head1.webp";
import Head2 from "../../../images/Head2.webp";
const Header = () => {
  return (
    <div className="header-container">
      <div className="info">
        <h1>Visual Designer Based in Iran</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua minim
          veniam, quis nostrud.
        </p>
        <div className="btn-box">
          <button type="button">Contact Me</button>
          <div></div>
        </div>
      </div>
      <div className="branding-project-images">
        <div className="branding-section">
                  <img src={Head1} alt="head1" />
                  <div className="branding-info">
          <h1>Branding Project</h1>
                  <button type="button">Learn More</button>
                  </div>
        </div>
        <div className="branding-section">
          <img src={Head2} alt="Head2" />
          <div className="branding-info">
            <h1>Branding Project</h1>
            <button type="button">Learn More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
