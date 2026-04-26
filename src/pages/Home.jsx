import React from "react";
import Laptop from "../assets/laptop.png";
import ProjectsSection from "../components/ProjectsSection";
import ToolsSection from "../components/ToolsSection";
import JourneySection from "../components/JourneySection";
import Footer from '../components/Footer';
const Home = () => {
  return (
    <>
      <section
        className="relative min-h-screen flex px-10 bg-no-repeat bg-blend-normal bg-top-right bg-contain"
        style={{ backgroundImage: `url(${Laptop})` }}
      >
        <div className=" flex flex-col justify-start items-start z-10 max-w-xl">
          <h1 className="text-9xl font-bold leading-tight">
            Hey, I'm{" "}
            <span className="text-blue-400 flex items-center">
              Himesh.
              <span className="font-light text-8xl ml-1 animate-[blink_2s_infinite]">
                |
              </span>
            </span>
          </h1>

          <h2 className="text-3xl text-gray-400 mt-4">
            Frontend Developer | AI Explorer
          </h2>

          <p className="mt-4 text-xl text-gray-500">
            I build modern, interactive and visually stunning web experiences
            with clean UI and smart functionality.
          </p>
        </div>
      </section>

      <section className="p-5">
        <h1 className="text-3xl font-bold">FEATURED WORKS</h1>
        <ProjectsSection />
      </section>

      <section className="p-5 my-5">
        <h1 className="text-3xl font-bold text-center my-4">MY TECH STACK</h1>
        <ToolsSection/>
      </section>

      <section className="p-5 my-10 flex flex-col items-center">
        <h1 className="text-3xl font-bold text-center mb-10">
          JOURNEY & EDUCATION
        </h1>
        <JourneySection />
      </section>

      <section>
        <Footer/>
      </section>
    </>
  );
};

export default Home;
