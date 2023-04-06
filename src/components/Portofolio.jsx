import React from "react";
import porto from "../data/porto";
import PortfolioItems from "./PortfolioItems";
import Title from "./Title";
const Portofolio = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center p-0 md:p-10 ">
        <Title id="Portfolio" children="Portfolio" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
          {porto.map((project) => (
            <PortfolioItems
              imgUrl={project.imgUrl}
              title={project.title}
              stack={project.stack}
              link={project.link}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Portofolio;
