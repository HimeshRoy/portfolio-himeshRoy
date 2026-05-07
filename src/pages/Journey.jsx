import React from "react";
import EducationCard from "../components/EducationCard";

const Journey = () => {
  return (
    <section className="py-40 px-6">

      <h1 className="text-5xl font-bold text-center mb-32">
        JOURNEY & EDUCATION
      </h1>

      <div className="flex flex-col items-center gap-0 rounded-[35px]">

        <EducationCard
          img="https://geetauniversity.edu.in/blog/wp-content/uploads/2026/02/Geeta-Image.png"
          title="GEETA UNIVERSITY"
          location="Naultha, Panipat, Haryana"
          course="B.Tech CSE (AI & ML)"
          year="2025 - Present"
        />

        <EducationCard
          img="https://www.yayskool.com/images/school/nirmaan-vidya-jyoti-school-darjeeling-812311527.png"
          title="NIRMAAN VIDYA JYOTI SCHOOL"
          location="Siliguri, West Bengal"
          course="Higher Secondary (PCM)"
          year="2023 - 2025"
        />

        <EducationCard
          img="https://content.jdmagicbox.com/comp/jalpaiguri/a4/9999p3561.3561.171013205606.e1a4/catalogue/caesar-school-mal-jalpaiguri-schools-hOS7lX2qLK.jpg"
          title="CAESAR SCHOOL"
          location="Malbazar, Jalpaiguri, Wst Bengal"
          course="Secondary"
          year="2023"
        />

      </div>

    </section>
  );
};

export default Journey;