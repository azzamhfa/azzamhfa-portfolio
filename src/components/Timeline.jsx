import React from "react";
import TimelineItem from "./TimelineItem";
import timeline from "../data/timeline.js";
import skills from "../data/skills";
import Title from "./Title";
import { motion } from "framer-motion";

const variant = {
  offscreen: {
    opacity: 0,
  },
  onscreen: {
    opacity: 1,
    transition: { ease: "linear", duration: 1 },
  },
};

const Timeline = () => {
  return (
    <motion.div
      id="achievement"
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.2 }}
      variants={variant}
      className="flex flex-col md:flex-col items-center w-full my-20 p-10"
    >
      <Title id="portfolio" children="Achivements" />
      <div className="flex justify-evenly flex-col md:flex-row">
        <div className="">
          <Title id="portfolio" children="Experiences" />
          {timeline.map((item) => (
            <TimelineItem
              year={item.year}
              title={item.title}
              duration={item.duration}
              details={item.details}
            />
          ))}
        </div>
        <div className="mt-10 md:mt-0">
          <Title id="portfolio" children="Skills" />
          {skills.map((item) => (
            <TimelineItem title={item.title} details={item.details} />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Timeline;
