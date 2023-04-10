import React from "react";
import porto from "../data/porto";
import PortfolioItems from "./PortfolioItems";
import Title from "./Title";
import { motion } from "framer-motion";
const staggered = {
  hidden: {
    opacity: 0
  },
  openned: {
    opacity: 1,
    transition : {
      duration: 2
    }
  }
}

const Portofolio = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center p-0 md:p-10 " id="portfolio">
        <Title id="Portfolio" children="Portfolio" />
        <motion.div
        initial="hidden"
        animate="openned"
        transition={{staggerChildren:0.5, delay:0.5}}
        variants={staggered}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
          {porto.map((project) => (
            <PortfolioItems
              imgUrl={project.imgUrl}
              title={project.title}
              stack={project.stack}
              link={project.link}
              desc={project.desc}
            />
          ))}
        </motion.div>
      </div>
    </>
  );
};

export default Portofolio;
