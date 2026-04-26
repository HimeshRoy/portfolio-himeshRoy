import React, { useState } from "react";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { TbFileCvFilled } from "react-icons/tb";
import { IoLocationSharp } from "react-icons/io5";
import { IoCall } from "react-icons/io5";
import { BiLogoGmail } from "react-icons/bi";

import Resume from "../assets/resume.pdf";
const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      setError("All fields are required");
      setSuccess("");
      return;
    }

    if (!form.email.includes("@")) {
      setError("Enter a valid email");
      return;
    }

    setError("");
    setSuccess("Message sent successfully");

    setForm({ name: "", email: "", message: "" });
  };

  return (
    <>
      <div className="flex justify-around">
        <section className="flex items-center justify-center px-4">
          <div className="w-full max-w-2xl bg-[#0b1220] border border-blue-500/20 rounded-2xl p-8">
            <h2 className="text-2xl font-bold mb-6 text-gray-200">
              SEND A MESSAGE
            </h2>

            <form className="flex flex-col gap-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm text-gray-400">NAME</label>
                  <input
                    type="text"
                    placeholder="Your full name"
                    className="w-full mt-2 p-3 rounded-lg bg-transparent border border-blue-500/30 text-white placeholder-gray-500 focus:outline-none focus:border-blue-400 transition"
                  />
                </div>

                <div>
                  <label className="text-sm text-gray-400">EMAIL</label>
                  <input
                    type="email"
                    placeholder="your.email@example.com"
                    className="w-full mt-2 p-3 rounded-lg bg-transparent border border-blue-500/30 text-white placeholder-gray-500 focus:outline-none focus:border-blue-400 transition"
                  />
                </div>
              </div>

              {/* SUBJECT */}
              <div>
                <label className="text-sm text-gray-400">SUBJECT</label>
                <input
                  type="text"
                  placeholder="Collaboration / Inquiry / Hi!"
                  className="w-full mt-2 p-3 rounded-lg bg-transparent border border-blue-500/30 text-white placeholder-gray-500 focus:outline-none focus:border-blue-400 transition"
                />
              </div>

              {/* MESSAGE */}
              <div>
                <label className="text-sm text-gray-400">MESSAGE</label>
                <textarea
                  rows="5"
                  placeholder="Your message here..."
                  className="w-full mt-2 p-3 rounded-lg bg-transparent border border-blue-500/30 text-white placeholder-gray-500 focus:outline-none focus:border-blue-400 transition"
                ></textarea>
              </div>

              {/* BUTTON */}
              <button
                type="submit"
                className="w-full py-3 rounded-lg bg-blue-500/20 border border-blue-400 text-blue-300 font-semibold tracking-wide hover:bg-blue-500/30 transition"
              >
                SUBMIT MESSAGE
              </button>
            </form>
          </div>
        </section>

        <section>
          <h1 className="text-2xl font-bold text-blue-400 flex items-center gap-1"><IoLocationSharp/>Permanent Address</h1>
          <p className="text-xl text-gray-400">
            Dwarikamari, Tekatuli, Jalpaiguri, West Bengal - 735224
          </p>
          <p className="text-xl text-gray-400 my-4 flex items-center gap-2"><IoCall/> +91 9641487310</p>
          <p className="text-xl text-gray-400 my-2 flex items-center gap-2"><BiLogoGmail/> himeshroy.cse@gmail.com</p>

          <div className="text-5xl text-gray-400 flex gap-3 items-center mt-8">
            <a href={Resume} target="_blank" className="hover:text-blue-500">
              <TbFileCvFilled />
            </a>
            <a href="https://www.linkedin.com/in/himeshroy/" target="_blank" className="hover:text-blue-500">
              <FaLinkedin />
            </a>
            <a href="https://github.com/HimeshRoy" target="_blank" className="hover:text-blue-500"> 
              <FaGithub />
            </a>
          </div>
        </section>
      </div>
    </>
  );
};

export default Contact;
