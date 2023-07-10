import React, { useEffect, useState, useRef, useCallback } from "react";
import "./WhatDoing.css";
import whatdoing from "../../../images/whatdoing.webp";
import slider1 from "../../../images/slider1.webp";
import slider2 from "../../../images/slider2.webp";
import slider3 from "../../../images/slider3.webp";
import slider4 from "../../../images/slider4.webp";
import { useAnimation, motion, useMotionValue } from "framer-motion";
import { useInView } from "react-intersection-observer";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { transform } from "lodash";
import { Translate } from "@mui/icons-material";

const Img = () => {
  return <img src={whatdoing} alt="" />;
};
const slides = [
  {
    url: slider1,
    title: slider1,
    project: [
      "Designing a Social ",
      " Media App for the ",
      " Black Experience",
    ],
    type: ["Branding Project ", " Web Design ", " Mobile Apps"],
    slideNumber: "01/04",
  },
  {
    url: slider2,
    title: slider2,
    project: [
      "Designing a Social ",
      " Media App for the ",
      " Black Experience",
    ],
    type: ["Branding Project ", " Web Design ", " Mobile Apps "],
    slideNumber: "02/04",
  },
  {
    url: slider3,
    title: slider3,
    project: [
      "Designing a Social ",
      " Media App for the ",
      " Black Experience ",
    ],
    type: ["Branding Project ", " Web Design ", " Mobile Apps "],
    slideNumber: "03/04",
  },
  {
    url: slider4,
    title: slider4,
    project: [
      "Designing a Social ",
      " Media App for the ",
      " Black Experience",
    ],
    type: ["Branding Project ", " Web Design ", " Mobile Apps "],
    slideNumber: "04/04",
  },
];
const WhatDoing = ({ characterAnim, parentWidth }) => {
  console.log(slides);
  const ctrls = useAnimation();
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });
  console.log(ref);
  useEffect(() => {
    if (inView) {
      ctrls.start("visible");
    }
    if (!inView) {
      ctrls.start("hidden");
    }
  }, [ctrls, inView]);

  //Slider//

  const [currentSlide, setCurrentSlide] = useState(0);
  const [dot, setDot] = useState(0);
  const timerRef = useRef(null);
  const goToPrev = () => {
    const isFirstSlide = currentSlide === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentSlide - 1;
    setCurrentSlide(newIndex);
  };
  const goToNext = useCallback(() => {
    const isFirstSlide = currentSlide === slides.length - 1;
    const newIndex = isFirstSlide ? 0 : currentSlide + 1;
    setCurrentSlide(newIndex);
  }, [currentSlide, slides]);
  const goToSlide = (itemIndex) => {
    setCurrentSlide(itemIndex);
    setDot(itemIndex);
  };
  useEffect(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    timerRef.current = setTimeout(() => {
      goToNext();
    }, 4000);
    return () => clearTimeout(timerRef.current);
  }, [goToNext]);

  
  return (
    <div className="whatDoing-container">
      <h5>WHAT I'M DOING</h5>
      <motion.div
        className="whatDoing-section"
        ref={ref}
        variants={characterAnim}
        animate={ctrls}
        aria-hidden="true"
        initial="hidden"
      >
        <Img />
        <h1>BRANDING DESIGN</h1>
        <div></div>
      </motion.div>
      <div className="whatDoing-section">
        <h1>UI/UX DESIGN</h1>
        <Img />
        <div></div>
      </div>
      <div className="whatDoing-section">
        <Img />
        <h1>BRANDING DESIGN</h1>
        <div></div>
      </div>
      <div className="whatDoing-section">
        <h1>BRANDING DESIGN</h1>
        <Img />
        <div></div>
      </div>

      <div className="whatdoing-project">
        <div className="top-section">
          <h5>SELECTED PROJECT</h5>
          <div className="btn-box-slider">
            <div className="left-arrow" onClick={goToPrev}>
              <KeyboardArrowLeftIcon />
            </div>
            <div className="right-arrow" onClick={goToNext}>
              <KeyboardArrowRightIcon />
            </div>
          </div>
        </div>

        <div className="slider-container">
          
            <span className="sliderNumber">
              {slides[currentSlide].slideNumber}
            </span>
            <img src={slides[currentSlide].url} />
            <div className="project">
              <h3>PROJECT</h3>

              <p>{slides[currentSlide].project}</p>
            </div>
            <div className="type">
              <h3>TYPE</h3>
              <p>{slides[currentSlide].type}</p>
            </div>
          </div>
          <div className="dotsSlides">
            {slides.map((slide, slideIndex) => (
              <div
                className={`${dot ? "dotsStyle active" : "dotsStyle"}`}
                key={slideIndex}
                onClick={() => goToSlide(slideIndex)}
              >
                .
              </div>
            ))}
          </div>
        </div>
      </div>
    
  );
};

export default WhatDoing;
