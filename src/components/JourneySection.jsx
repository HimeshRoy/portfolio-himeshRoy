import React from "react";

const JourneySection = () => {
  const data = [
    {
      title: "B.Tech CSE, Geeta University",
      desc: "Batch of 2029",
    },
    {
      title: "Higher Secondary, Nirmaan Vidya Jyoti School",
      desc: "Batch of 2025",
    },
    {
      title: "Secondary, Caesar School",
      desc: "Batch of 2023",
    },
  ];

  return (
    <section className="w-full py-20 px-6 text-white flex justify-center">
      
      <div className="relative w-full max-w-4xl">

        {/* CENTER LINE */}
        <div className="absolute left-1/2 top-0 -translate-x-1/2 w-0.5 h-full bg-blue-400/50"></div>

        {data.map((item, index) => {
          const isLeft = index % 2 === 0;

          return (
            <div
              key={index}
              className={`relative w-full flex mb-16 ${
                isLeft ? "justify-start" : "justify-end"
              }`}
            >
              
              {/* CONTENT */}
              <div className="w-1/2 px-6">
                <div
                  className={`${
                    isLeft ? "text-right" : "text-left"
                  }`}
                >
                  <h3 className="font-semibold text-lg">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 text-sm mt-1">
                    {item.desc}
                  </p>
                </div>
              </div>

              {/* DOT */}
              <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-blue-500 rounded-full shadow-[0_0_10px_rgba(59,130,246,0.8)]"></div>

            </div>
          );
        })}

      </div>
    </section>
  );
};

export default JourneySection;