import React from "react";
import Header from "../components/home/Header/Header";
import AboutMe from "../components/home/About me/AboutMe";
import WhatDoing from "../components/home/WhatDoing/WhatDoing";
import PastClient from "../components/home/Past Client/PastClient";

const Home = ({ characterAnim }) => {
  return (
    <div className="home-page">
      <Header />
      <AboutMe characterAnim={characterAnim} />
      <WhatDoing characterAnim={characterAnim} />
      <PastClient characterAnim={characterAnim} />
    </div>
  );
};

export default Home;
