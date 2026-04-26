import React from "react";
import Loom from "../assets/loom.png";
import mm from "../assets/mirthMaker.png";
import ERP from "../assets/erp.png";
const ProjectsSection = () => {
  const data = [
    {
      title: "Loom",
      about:
        "A responsive e-commerce platform with clean UI, product browsing, and smooth user experience.",
      tools: ["HTML5", "CSS", "Bootstrap"],
      imgLink: Loom,
    },
    {
      title: "Mirth & Maker",
      about:
        "An event management website focused on event discovery, clean layouts, and engaging user experience.",
      tools: ["HTML5", "CSS", "Bootstrap"],
      imgLink: mm,
    },
    {
      title: "ERP (Enterprise Resource Planning)",
      about:
        "A web-based ERP system designed to manage business processes, user data, and workflow operations efficiently.",
      tools: ["HTML5", "CSS", "Bootstrap", "JavaScript"],
      imgLink: ERP,
    },
  ];

  return (
    <div className="p-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {data.map((each, index) => (
        <div
          key={index}
          className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-5 hover:scale-105 transition"
        >
          <div
            className="h-50 bg-cover bg-center rounded-xl"
            style={{ backgroundImage: `url(${each.imgLink})` }}
          >
            <div className="w-full h-full rounded-xl inset-0 bg-blend-overlay bg-black/30"></div>
          </div>
          <h2 className="text-2xl font-bold mt-2">{each.title}</h2>

          <p className="text-gray-400 mt-2">{each.about}</p>

          <div className="flex flex-wrap gap-2 mt-4">
            {each.tools.map((item, i) => (
              <span
                key={i}
                className="text-xs px-2 py-1 bg-blue-500/20 text-blue-400 rounded-md"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectsSection;
