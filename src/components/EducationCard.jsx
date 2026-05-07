import React from "react";
import { motion } from "framer-motion";

const cardVariants = {
  offscreen: {
    y: 100,
    opacity: 0,
    scale: 0.96,
  },

  onscreen: {
    y: 0,
    opacity: 1,
    scale: 1,

    transition: {
      type: "spring",
      bounce: 0.3,
      duration: 1,
    },
  },
};

const EducationCard = ({
  img,
  title,
  location,
  course,
  year,
  align = "left",
}) => {
  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: false, amount: 0.3 }}
      className="w-full flex justify-center px-5 mb-20"
    >
      <motion.div
        variants={cardVariants}
        className="
          relative
          w-full
          max-w-6xl
          h-125
          rounded-[35px]
          overflow-hidden
          border border-white/10
          shadow-[0_0_40px_rgba(59,130,246,0.15)]
          group
        "
      >

        {/* IMAGE */}
        <img
          src={img}
          alt=""
          className="
            absolute
            inset-0
            w-full
            h-full
            object-cover
            transition duration-700
            group-hover:scale-105
          "
        />

        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* BLUE GLOW */}
        <div className="absolute inset-0 bg-linear-to-br from-blue-500/20 via-transparent to-transparent"></div>

        {/* CONTENT */}
        <div
          className={`
            absolute
            top-1/2
            -translate-y-1/2
            z-10
            ${align === "right" ? "right-10" : "left-10"}
          `}
        >

          <div
            className="
              w-105
              bg-white/10
              backdrop-blur-2xl
              border border-white/10
              rounded-3xl
              p-8
              shadow-[0_0_30px_rgba(59,130,246,0.2)]
            "
          >

            <h1 className="text-5xl font-bold text-blue-300 leading-tight">
              {title}
            </h1>

            <p className="text-gray-300 text-lg mt-3">
              {location}
            </p>

            <div className="w-20 h-0.5 bg-blue-400 rounded-full my-6"></div>

            <h2 className="text-3xl text-white leading-snug">
              {course}
            </h2>

            <p className="text-gray-400 mt-5 text-lg">
              {year}
            </p>

          </div>
        </div>

      </motion.div>
    </motion.div>
  );
};

export default EducationCard;