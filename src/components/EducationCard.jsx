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
      className="w-full flex justify-center px-3 sm:px-5 mb-10 sm:mb-20"
    >
      <motion.div
        variants={cardVariants}
        className="
          relative
          w-full
          max-w-6xl

          h-[350px]
          sm:h-[450px]
          lg:h-[500px]

          rounded-[25px]
          sm:rounded-[35px]

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

            transition
            duration-700

            group-hover:scale-105
          "
        />

        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* BLUE GLOW */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-transparent to-transparent"></div>

        {/* CONTENT */}
        <div
          className={`
            absolute
            z-10

            bottom-5
            left-1/2
            -translate-x-1/2

            md:top-1/2
            md:-translate-y-1/2
            md:bottom-auto
            md:translate-x-0

            ${
              align === "right"
                ? "md:right-10 md:left-auto"
                : "md:left-10"
            }
          `}
        >
          <div
            className="
              w-[90vw]
              max-w-[430px]

              bg-white/10
              backdrop-blur-2xl

              border
              border-white/10

              rounded-2xl
              lg:rounded-3xl

              p-5
              sm:p-6
              lg:p-8

              shadow-[0_0_30px_rgba(59,130,246,0.2)]
            "
          >
            <h1
              className="
                text-3xl
                sm:text-4xl
                lg:text-5xl

                font-bold
                text-blue-300
                leading-tight
              "
            >
              {title}
            </h1>

            <p
              className="
                text-gray-300
                text-sm
                sm:text-base
                lg:text-lg

                mt-3
              "
            >
              {location}
            </p>

            <div className="w-20 h-0.5 bg-blue-400 rounded-full my-4 sm:my-6"></div>

            <h2
              className="
                text-xl
                sm:text-2xl
                lg:text-3xl

                text-white
                leading-snug
              "
            >
              {course}
            </h2>

            <p
              className="
                text-gray-400
                mt-4
                sm:mt-5

                text-sm
                sm:text-base
                lg:text-lg
              "
            >
              {year}
            </p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default EducationCard;