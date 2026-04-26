import React from "react";

const ProjectCard = ({ title, about, tools, img, live, github }) => {
  return (
    <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl overflow-hidden group hover:scale-[1.03] transition duration-300">

      <div className="relative h-48 overflow-hidden">
        <img
          src={img}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
        />

        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition flex items-center justify-center gap-4">
          
          <a
            href={live}
            target="_blank"
            rel="noreferrer"
            className="px-4 py-2 bg-blue-500 text-white rounded-lg text-sm hover:bg-blue-600 transition"
          >
            View Site
          </a>

          <a
            href={github}
            target="_blank"
            rel="noreferrer"
            className="px-4 py-2 bg-gray-800 text-white rounded-lg text-sm hover:bg-gray-700 transition"
          >
            GitHub
          </a>

        </div>
      </div>

      <div className="p-5">
        <h2 className="text-xl font-bold">{title}</h2>

        <p className="text-gray-400 mt-2 text-sm">
          {about}
        </p>

        <div className="flex flex-wrap gap-2 mt-4">
          {tools.map((item, i) => (
            <span
              key={i}
              className="text-xs px-2 py-1 bg-blue-500/20 text-blue-400 rounded-md"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;