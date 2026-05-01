import React from "react";
import Resume from "../assets/resume.pdf";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { TbFileCvFilled } from "react-icons/tb";
import { IoLocationSharp } from "react-icons/io5";
import { IoCall } from "react-icons/io5";
import { BiLogoGmail } from "react-icons/bi";
import { FaInstagram } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import pfp from "../assets/pfp.png";
const Footer = () => {
  return (
    <>
      <section className="flex w-full my-2 bg-[#111d3b] rounded-lg py-3">

        <div className="w-3/4 flex items-center justify-start">
          <div className="flex items-center gap-6">
            
            <img src={pfp} alt="" className="w-55 border-blue-950 relative bottom-0" />

           
            <div className="pe-30">
              <h2 className="text-2xl font-semibold text-blue-400 mb-2">
                About Me
              </h2>
              <p className="text-gray-400 text-base leading-relaxed">
                I am a B.Tech CSE student with a strong interest in frontend
                development and modern web technologies. I enjoy building
                responsive and visually appealing web applications while
                continuously learning and improving my skills.
              </p>
            </div>
          </div>
        </div>


        <div className="w-0.5 bg-blue-800 opacity-50"></div>

        
        <div className="w-1/2 flex items-center justify-start ps-5">
          <div>
            <h1 className="text-xl text-blue-400 flex items-center gap-1">
              <IoLocationSharp />
              Permanent Address
            </h1>

            <p className="text-gray-400 mt-2">
              Dwarikamari, Tekatuli, Jalpaiguri, West Bengal - 735224
            </p>

            <p className="text-gray-400 my-4 flex items-center gap-2">
              <IoCall /> +91 9641487310
            </p>

            <p className="text-gray-400 flex items-center gap-2">
              <BiLogoGmail /> himeshroy.cse@gmail.com
            </p>

            {/* SOCIALS */}
            <div className="text-3xl text-gray-400 flex gap-4 mt-6">
              <a
                href={Resume}
                target="_blank"
                rel="noreferrer"
                className="hover:text-blue-500"
              >
                <TbFileCvFilled />
              </a>

              <a
                href="https://www.linkedin.com/in/himeshroy/"
                target="_blank"
                rel="noreferrer"
                className="hover:text-blue-500"
              >
                <FaLinkedin />
              </a>

              <a
                href="https://github.com/HimeshRoy"
                target="_blank"
                rel="noreferrer"
                className="hover:text-blue-500"
              >
                <FaGithub />
              </a>

              <a
                href="https://www.instagram.com/_himesh_roy"
                target="_blank"
                rel="noreferrer"
                className="hover:text-blue-500"
              >
                <FaInstagram />
              </a>

              <a
                href="https://t.me/himesh_roy"
                target="_blank"
                rel="noreferrer"
                className="hover:text-blue-500"
              >
                <FaTelegram />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
