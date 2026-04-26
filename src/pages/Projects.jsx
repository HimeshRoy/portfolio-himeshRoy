import React from "react";
import ProjectCard from "../components/ProjectCard";
import Loom from "../assets/loom.png";
import mm from "../assets/mirthMaker.png";
import ERP from "../assets/erp.png";
import RPS from "../assets/rockPaper.png";
import Craveo from "../assets/craveo.png";
import Potfilio from "../assets/potfolio.png";

const Projects = () => {
  return (
    <>
      <section className="p-5 grid grid-cols-3 gap-10">
        <ProjectCard
          title="Loom"
          about="A responsive e-commerce platform with clean UI, product browsing, and smooth user experience."
          tools={["HTML5", "Bootstrap", "CSS"]}
          img={Loom}
          live="https://himeshroy.github.io/Loom/"
          github="https://github.com/HimeshRoy/Loom"
        />

        <ProjectCard
          title="Mirth & Maker"
          about="An event management website focused on event discovery, clean layouts, and engaging user experience."
          tools={["HTML5", "Bootstrap", "CSS"]}
          img={mm}
          live="https://himeshroy.github.io/MirthMaker/"
          github="https://github.com/HimeshRoy/MirthMaker"
        />

        <ProjectCard
          title="ERP (Enterprise Resource Planning)"
          about="A web-based ERP system designed to manage business processes, user data, and workflow operations efficiently."
          tools={["HTML5", "Bootstrap", "CSS", "JavaScript"]}
          img={ERP}
          live="dsbg"
          github="fbd"
        />

        <ProjectCard
          title="Stone Paper Scissors Game"
          about="An interactive Stone Paper Scissors game that lets users play against the computer with instant results. Built with pure JavaScript logic and a clean, responsive interface."
          tools={["HTML5", "CSS", "JavaScript"]}
          img={RPS}
          live="https://himeshroy.github.io/rockPaperScissors.play/"
          github="https://github.com/HimeshRoy/rockPaperScissors.play"
        />

        <ProjectCard
          title="Craveo"
          about="A responsive food delivery frontend designed with clean UI, modern layouts, and smooth user experience using HTML and CSS."
          tools={["HTML5", "CSS"]}
          img={Craveo}
          live="https://himeshroy.github.io/Craveo/"
          github="https://github.com/HimeshRoy/Craveo"
        />

        <ProjectCard
          title="Personal Portfolio"
          about="A modern personal portfolio website built to showcase my projects, skills, and journey as a developer. Designed with clean UI, smooth interactions, and responsive layouts to create an engaging user experience."
          tools={["React / Vite", "Tailwind", "HTML5", "CSS"]}
          img={Potfilio}
          live=""
          github=""
        />
      </section>
    </>
  );
};

export default Projects;
