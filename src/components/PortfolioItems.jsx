import { motion } from "framer-motion";
import React from "react";
const PortfolioItems = ({ title, imgUrl, stack, link, desc }) => {
  return (
    <div className="border-stone-900 border-[1px] rounded-md shadow-lg relative w-[400px]">
      <motion.img
        src={imgUrl}
        alt="portofolio"
        className="transition ease-in duration-1000 delay-1000 absolute w-full h-36 md:h-48 object-cover cursor-pointer z-[1] hover:hidden "
      />
      <div className="abosolute w-full h-36 md:h-48 z-0 p-4 text-stone-900 bg-stone-100 text-justify">
        <p className="text-lg  font-semibold">Description :</p>
        {desc}
      </div>
      <div className="w-full p-4">
        <h3 className="text-lg md:text-xl mb-2 md:mb-3 font-semibold">
          {title}
        </h3>
        <p
          className="text-xs gap-2 flex flex-wrap flex-row items-center
         justify-start md:text-sm"
        >
          {stack.map((item) => (
            <span
              className="inline-block px-2 py-1 font-semibold border-2
             border-stone-900 rounded-md hover:bg-stone-300"
            >
              {item}
            </span>
          ))}
          <span
            className=" cursor-pointer inline-block px-2 py-1 font-semibold border-2 bg-sky-600 text-white border-sky-600 rounded-md hover:bg-sky-100 hover:text-stone-900"
            onClick={() => {
              window.open(link);
            }}
          >
            Demo
          </span>
        </p>
      </div>
    </div>
  );
};

export default PortfolioItems;
