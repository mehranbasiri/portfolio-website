import React, { useState } from "react";
import StarIcon from "@mui/icons-material/Star";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import "./Navbar.css";
const Navbar = () => {
  const [closeBtn, setCloseBtn] = useState(false);
  return (
    <div className="navbar">
      <div className="navbar-mobile">
        <div onClick={() => setCloseBtn(true)}>
          <MenuIcon style={{ fontSize: "30" }} />
        </div>
        {closeBtn && (
          <div>
            <div onClick={() => setCloseBtn(false)}>
              <CloseIcon style={{ fontSize: "30", backgroundColor: "fff" }} />
            </div>
            <ul>
              <li>Home</li>
              <li>About</li>

              <li>Works</li>
              <li>Contact</li>
            </ul>
          </div>
        )}
      </div>
      <div className="navbar-items">
        <ul>
          <li>Home</li>
          <li>About</li>

          <p>
            <StarIcon />
          </p>
          <li>Works</li>
          <li>Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
