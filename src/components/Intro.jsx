import React from "react";
import { profile } from "../assets";

const Intro = () => {
  return (
    <div className="flex flex-col items-center justify-center pt-20 pb-6">
      <img
        src={profile}
        alt="profile"
        className="rounded-full object-cover object-top sm:w-[250px] sm:h-[250px] 
          w-[240px] h-[240px] m-2 border-8 border-solid drop-shadow-2xl ring-4 ring-stone-800 border-zinc-50"
      />
      <h1 className="text-4xl md:text-7xl mb-1 md:mb-3 font-bold">Azzamhfa</h1>
      <p className="text-base md:text-xl mb-3 font-medium">
        Junior Web Developer & Data Analyst Learner
      </p>
    </div>
  );
};

export default Intro;
