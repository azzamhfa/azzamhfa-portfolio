import React from "react";

const NavBar = () => {
  return (
    <header className="w-full px-44 py-5 font-medium hidden md:block text-center text-lg text-stone-800 border-b-2">
      <nav className="flex flex-row">
        <a href="/" className={`font-sans text-2xl relative group mr-4 cursor-pointer`}>
          Home
          <span
            className="h-[2px] inline-block w-0 bg-stone-900 absolute
            left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300"
          ></span>
        </a>
        <a href="#portfolio" className={`font-sans text-2xl relative group mr-4 cursor-pointer`}>
          Portfolio
          <span
            className="h-[2px] inline-block w-0 bg-stone-900 absolute
            left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300"
          ></span>
        </a>
        <a href="#achievement" className={`font-sans text-2xl relative group mr-4 cursor-pointer`}>
          Achievement
          <span
            className="h-[2px] inline-block w-0 bg-stone-900 absolute
            left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300"
          ></span>
        </a>
        <a href="#contact" className={`font-sans text-2xl relative group mr-4 cursor-pointer`}>
          Contact
          <span
            className="h-[2px] inline-block w-0 bg-stone-900 absolute
            left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300"
          ></span>
        </a>
      </nav>
    </header>
  );
};

export default NavBar;
