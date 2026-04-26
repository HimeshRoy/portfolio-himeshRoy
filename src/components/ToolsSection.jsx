import React from "react";
import reactLogo from "../toolsImg/react.png";
import viteLogo from "../toolsImg/vite.png";
import cppLogo from "../toolsImg/cpp.png";
import htmlLogo from "../toolsImg/html5.png";
import cssLogo from "../toolsImg/cssLogo.png";
import jsLogo from "../toolsImg/js.svg";
import pyLogo from "../toolsImg/python.png";
import tailwindLogo from "../toolsImg/tailwind.png";
import bootstrapLogo from "../toolsImg/bootstrap.png";
import gitLogo from "../toolsImg/git.png";
import mongoLogo from "../toolsImg/mongo.png";
import figmaLogo from "../toolsImg/figma.png";

const ToolsSection = () => {
  return (
    <>
      <div className="p-5 grid grid-cols-4 md:grid-cols-6 lg:grid-cols-7 gap-4 items-center">
        <img src={reactLogo} alt="" className="hover:scale-110 transition"/>
        <img src={viteLogo} alt="" className="hover:scale-110 transition"/>
        <img src={cppLogo} alt="" className="hover:scale-110 transition"/>
        <img src={htmlLogo} alt="" className="hover:scale-110 transition" />
        <img src={cssLogo} alt="" className="hover:scale-110 transition" />
        <div className="w-full flex justify-center">
          <img src={jsLogo} alt="" className=" w-25 rounded-lg hover:scale-110 transition" />
        </div>
        <img src={pyLogo} alt="" className="hover:scale-110 transition"/>
        
      </div>
      <div className="p-5 grid grid-cols-4 md:grid-cols-6 lg:grid-cols-9 gap-4 items-center">
        <nav></nav>
        <nav></nav>
        <img src={bootstrapLogo} alt="" className="hover:scale-110 transition" />
        <img src={tailwindLogo} alt="" className="hover:scale-110 transition" />
        <img src={gitLogo} alt="" className="hover:scale-110 transition" />
        <div className="w-full flex justify-center" >
          <img src={mongoLogo} alt="" className="w-15 hover:scale-110 transition"/>
        </div>
        <img src={figmaLogo} alt="" className="hover:scale-110 transition" />
        <nav></nav>
        <nav></nav>
      </div>
    </>
  );
};

export default ToolsSection;
