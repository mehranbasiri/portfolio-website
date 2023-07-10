import React, { useEffect } from "react";
import Aboutme from "../../../images/Aboutme.png";
import "./AboutMe.css";

import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const AboutMe = ({ characterAnim }) => {
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

  return (
    <motion.div
      className="aboutMe-container"
      ref={ref}
      aria-hidden="true"
      initial="hidden"
      animate={ctrls}
      variants={characterAnim}
      transition={{
        delayChildren: 25,

        staggerChildren: 0.05,
      }}
    >
      <div className="profile-section">
        <h5>ABOUT ME</h5>
        <div className="image-box">
          <img src={Aboutme} alt="Profile img" />
        </div>
      </div>
      <p>
        Hi I’m Donnie and I am passionate about everything that has to do with
        Digital Design and Art Direction. I enjoy working with agencies and
        enthusiastic people who want to solve problems through beautiful designs
        and experiences.
      </p>
    </motion.div>
  );
};

export default AboutMe;
