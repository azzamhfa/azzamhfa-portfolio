import { useState } from "react";
import NavBar from "./components/NavBar";
import "./index.css";
import Intro from "./components/Intro";
import Portofolio from "./components/Portofolio";
import Timeline from "./components/Timeline";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { motion } from "framer-motion";

function App() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { ease: "easeIn",
          duration: 0.5,
        },
      }}
      className="App"
    >
      <NavBar />
      <Intro />
      <Portofolio />
      <Timeline />
      <Contact />
      <Footer />
    </motion.div>
  );
}

export default App;
