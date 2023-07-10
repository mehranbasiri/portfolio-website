import React from "react";
import Header from "../components/home/Header/Header";
import AboutMe from "../components/home/About me/AboutMe";
import WhatDoing from "../components/home/WhatDoing/WhatDoing";

const Home = ({ characterAnim }) => {
  return (
    <div className="home-page">
      <Header />
      <AboutMe characterAnim={characterAnim} />
      <WhatDoing characterAnim={characterAnim} parentWidth={1} />
    </div>
  );
};

export default Home;
