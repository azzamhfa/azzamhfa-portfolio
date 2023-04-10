import React from "react";
import { instagram, linkedin } from "../assets/index";
import Title from "./Title";

const Contact = () => {
  return (
    <div className="flex flex-col mb-10 mx-auto " id="contact">
      <div className="flex justify-evenly items-center flex-col ">
        <Title id="contact" children="Contact Me" />
        <div className="flex justify-center">
          <div className="flex items-center mr-10">
            <img
              src={instagram}
              alt="client"
              className="w-[50px] object-contain fill-black"
            />
            <h1 className="ml-3 text-xl font-semibold text-stone-900">
              @azzamhfa
            </h1>
          </div>
          <div className="flex items-center">
            <img
              src={linkedin}
              alt="client"
              className="w-[50px] object-contain fill-black"
            />
            <h1 className="ml-3 text-xl font-semibold text-stone-900">
              @azzamhfa
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
