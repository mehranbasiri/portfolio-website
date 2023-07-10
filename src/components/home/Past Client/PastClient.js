import React, { useEffect, useRef, useState } from "react";
import "./PastClient.css";
import { PastData, PastSliderData } from "../../../data";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
const PastClient = ({ characterAnim }) => {
  const ctrls = useAnimation();
  const { ref, inView } = useInView({
    rootMargin: "700px",
    threshold: 0.25,
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

  const [people] = useState(PastSliderData);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const lastIndex = people.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, people]);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 5000);
    return () => {
      clearInterval(slider);
    };
  }, [index]);
  return (
    <div className="pastClient-container">
      <h1>PAST CLIENT</h1>
      {PastData.map((past, pastIndex) => (
        <>
          <motion.div
            className="pastClient-item"
            ref={ref}
            variants={characterAnim}
            animate={ctrls}
            aria-hidden="true"
            initial="hidden"
          >
            <div className="pastClient-image">
              <span>{past.itemNumber}</span>
              <img src={past.imgUrl} alt={past.title} />
            </div>
            <div className="past-item-content">
              <h2>{past.title}</h2>
              <p>{past.content}</p>
            </div>
          </motion.div>
          <div className="line"></div>
        </>
      ))}

      <div className="past-slide-container">
        <div className="past-slide-top">
          <h1>PAST CLIENT</h1>
          <div className="pastSlide-btnBox">
            <button className="next" onClick={() => setIndex(index - 1)}>
              <KeyboardArrowLeftIcon />
            </button>
            <button className="prev" onClick={() => setIndex(index + 1)}>
              <KeyboardArrowRightIcon />
            </button>
          </div>
        </div>
        <div className="past-slide-item">
          {people.map((item, indexPeople) => {
            const { id, title, content } = item;
            let position = "nextSlide";
            if (indexPeople === index) {
              position = "activeSlide";
            }
            if (
              indexPeople === index - 1 ||
              (index === 0 && indexPeople === people.length - 1)
            ) {
              position = "lastSlide";
            }
            return (
              <article className={position} key={id}>
                <p>{content}</p>
                <h2>{title}</h2>
              </article>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PastClient;
