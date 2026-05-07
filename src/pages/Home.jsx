import React from "react";
import Laptop from "../assets/laptop.png";
import ProjectsSection from "../components/ProjectsSection";
import ToolsSection from "../components/ToolsSection";
import JourneySection from "../components/JourneySection";
import Footer from "../components/Footer";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <>
      <section
        className="relative min-h-screen flex px-10 bg-no-repeat bg-blend-normal bg-top-right bg-contain"
        style={{ backgroundImage: `url(${Laptop})` }}
      >
        <div className=" flex flex-col justify-start items-start z-10 max-w-xl">
          <motion.h1
           className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold leading-tight"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Hey, I'm{" "}
            <span className="text-blue-400 flex items-center">
              Himesh.
              <span className="font-light md:text-5xl lg:text-8xl ml-1 animate-[blink_2s_infinite]">
                |
              </span>
            </span>
          </motion.h1>

          <motion.h2
            className="text-3xl text-gray-400 mt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Frontend Developer | AI Explorer
          </motion.h2>

          <motion.p
            className="mt-4 text-xl text-gray-500"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            I build modern, interactive and visually stunning web experiences
            with clean UI and smart functionality.
          </motion.p>
        </div>
      </section>

      <motion.section
        className="p-5"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-3xl font-bold">FEATURED WORKS</h1>
        <ProjectsSection />
      </motion.section>

      <motion.section className="p-5 my-5"
      initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.8 }}>
        <h1 className="text-3xl font-bold text-center my-4">MY TECH STACK</h1>
        <ToolsSection />
      </motion.section>

      <motion.section
        className="p-5 my-10 flex flex-col items-center"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 1.5 }}
      >
        <h1 className="text-3xl font-bold text-center mb-10">
          JOURNEY & EDUCATION
        </h1>
        <JourneySection />
      </motion.section>

      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 1 }}
      >
        <Footer />
      </motion.section>
    </>
  );
};

export default Home;
