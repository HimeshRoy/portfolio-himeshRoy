import React from "react";
import EducationCard from "../components/EducationCard";

const Journey = () => {
  return (
    <div className="p-6">

      <h1 className="text-3xl font-bold text-center mb-10">
        JOURNEY & EDUCATION
      </h1>

      <EducationCard
        img="https://geetauniversity.edu.in/blog/wp-content/uploads/2026/02/Geeta-Image.png"
        title="GEETA UNIVERSITY"
        location="Naultha, Panipat, Haryana"
        course="B.Tech CSE (AI & ML)"
        year="2025 - Present"
        align="left"
      />

      <EducationCard
        img="https://www.yayskool.com/images/school/nirmaan-vidya-jyoti-school-darjeeling-812311527.png"
        title="NIRMAAN VIDYA JYOTI SCHOOL"
        location="Siliguri, West Bengal"
        course="Higher Secondary (PCM)"
        year="2023 - 2025"
        align="right"
      />

      <EducationCard
        img="https://content.jdmagicbox.com/comp/jalpaiguri/a4/9999p3561.3561.171013205606.e1a4/catalogue/caesar-school-mal-jalpaiguri-schools-hOS7lX2qLK.jpg"
        title="CAESAR SCHOOL"
        location="Malbazar, Jalpaiguri, West Bengal"
        course="Secondary"
        year="2023"
        align="left"
      />

    </div>
  );
};

export default Journey;