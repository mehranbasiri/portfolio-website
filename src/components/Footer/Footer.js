import React from "react";
import "./Footer.css";
import Aboutme from "../../images/Aboutme.png";
const Footer = () => {
  return (
    <div className="footer">
      <div className="title-section">
        <h1>Have a Cool Project?</h1>
        <div className="footer-btn">
          <button>Contact Me</button>
          <div></div>
        </div>
      </div>
      <div className="line-footer"></div>
      <div className="footer-items">
        <div className="image-section">
          <div className="img-box">
            <img src={Aboutme} alt="Profile img" />
          </div>
          <h4>Visual Designer Based in Iran</h4>
        </div>
        <div className="footer-content">
          <ul>
            <li>Navigation</li>
            <li>Home</li>
            <li>About</li>
            <li>Expertise</li>
            <li>Work</li>
          </ul>
          <ul>
            <li>Services</li>
            <li>Branding</li>
            <li>UI/UX Design</li>
            <li>Development</li>
            <li>Digital Marketing</li>
          </ul>
          <ul>
            <li>Social Media</li>
            <li>Dribbble</li>
            <li>Twitter</li>
            <li>Instagram</li>
            <li>LinkedIn</li>
          </ul>
        </div>
        
        
      </div>
      <div className="line-footer"></div>
      <span>2023 | Mehran Basiri</span>
    </div>
  );
};

export default Footer;
