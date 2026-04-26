import React from "react";

const EducationCard = ({ img, title, location, course, year, align = "left" }) => {
  return (
    <div className="relative h-87.5 rounded-2xl overflow-hidden my-10 group">

      <img
        src={img}
        alt=""
        className="absolute w-full h-full object-cover opacity-40 group-hover:scale-105 transition duration-700"
      />

      <div className="absolute inset-0 bg-linear-to-r from-black/80 via-black/40 to-transparent"></div>

      <div
        className={`relative h-full flex flex-col justify-center p-10 ${
          align === "right" ? "items-end text-right" : "items-start text-left"
        }`}
      >
        <h1 className="text-4xl font-bold text-blue-300">
          {title}
        </h1>

        <p className="text-gray-400 mt-2">
          {location}
        </p>

        <p className="text-xl mt-4 text-indigo-100">
          {course}
        </p>

        <p className="text-gray-400 mt-2">
          {year}
        </p>
      </div>
    </div>
  );
};

export default EducationCard;