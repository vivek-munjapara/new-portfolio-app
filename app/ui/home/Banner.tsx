"use client";
import pic from "../../../public/websitedevelopment.png";

import {
  FaLinkedin,
  FaGithub,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaGoogleDrive,
} from "react-icons/fa";
import { FaSquareXTwitter, FaHtml5 } from "react-icons/fa6";

/* import { FaSquareFacebook } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";
import { FaTelegram } from "react-icons/fa6"; */

/* import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa6"; */
import { SiNextdotjs } from "react-icons/si";
import { BiLogoTypescript } from "react-icons/bi";

import { ReactTyped } from "react-typed";

import Image from "next/image";
/* console.log(pic.src) */
const Banner = () => {
  return (
    <div
      id="Home"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20"
    >
      <div className="flex items-center flex-col md:flex-row">
        <div className="md:w-[55%] mt-12 md:mt-18 space-y-2 order-2 md:order-1 ">
          <span className="text-xl">Welcome In My Portfolio App</span>
          <div className="flex space-x-1 text-2xl md:text-4xl">
            <h1>
              Hi👋, I'm a&nbsp;
              {/* <span >Developer</span> */} <br className="sm:hidden" />
              <ReactTyped
                className="text-red-700 font-bold"
                strings={["Web ", "FrontEnd ", "ReactJs ", "NextJs "]}
                typeSpeed={40}
                backSpeed={50}
                loop={true}
              />
              Developer
            </h1>
          </div>
          <br />
          <ul className="text-base md:text-md md:text-justify space-y-2 ">
            <li className="flex gap-2">
              ✅
              <span>
                Over 2 years of expertise in React.js, Next.js, JavaScript, and
                modern UI frameworks like Tailwind CSS and MUI.
              </span>
            </li>
            <li className="flex gap-2">
              ✅
              <span>
                Building scalable, high-performance web applications with
                optimized components, seamless API integration, robust state
                management using React Redux and React Query, and secure payment
                gateway implementations, ensuring smooth user experiences and
                efficient data handling.
              </span>
            </li>
            <li className="flex gap-2">
              ✅
              <span>
                Proficient in React Redux, React Query, Postman, GitHub, and
                Stripe for seamless web development and API management.
              </span>
            </li>
            <li className="flex gap-2">
              ✅
              <span>
                Committed to writing clean, efficient code, mentoring junior
                developers, and staying updated with the latest industry trends.
              </span>
            </li>
          </ul>
          <div>
            <div className="bnrcta space-x-2 text-white mt-4 mb-3 sm:mb-7">
              <a
                href="#Contact"
                className="px-3 py-1 bg-red-700 rounded-md hover:bg-black transition-all"
              >
                Get in touch
              </a>
              <a
                href="#Projects"
                className="px-3 py-1 bg-red-700 rounded-md hover:bg-black transition-all"
              >
                See my work
              </a>
            </div>
          </div>
          {/* social media icons */}
          <div className="lg:flex flex-col items-center md:flex-row justify-between space-y-6 lg:space-y-0">
            <div className="space-y-2">
              <h2 className="font-bold text-center ">Available on</h2>
              <ul className="flex space-x-5 justify-center">
                <li>
                  <a
                    href="https://github.com/vivek-munjapara"
                    target="_blank"
                    aria-label="Github"
                  >
                    <FaGithub className="text-2xl cursor-pointer hover:text-black transition-all" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/vivek-munjapara-frontend-developer/"
                    target="_blank"
                    aria-label="Linked in"
                  >
                    <FaLinkedin className="text-2xl cursor-pointer hover:text-cyan-600 transition-all" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://drive.google.com/drive/folders/1u-9KydccV7cJJYgsEQ1rtUfcxpuM26Fp"
                    target="_blank"
                    title="Google Drive"
                  >
                    <FaGoogleDrive className="text-2xl cursor-pointer hover:text-cyan-600 transition-all" />
                  </a>
                </li>
              </ul>
            </div>
            <div className=" space-y-2">
              <h2 className="font-bold text-center">Currently working on</h2>
              <div className="flex space-x-5 justify-center">
                <a href="https://react.dev/" target="_blank">
                  <FaReact
                    className="text-2xl md:text-3xl hover:scale-110 duration-200 cursor-pointer hover:text-cyan-600 transition-all"
                    title="ReactJs"
                  />
                </a>
                <a href="https://nextjs.org/" target="_blank">
                  <SiNextdotjs
                    className="text-2xl md:text-3xl hover:scale-110 duration-200 cursor-pointer hover:text-black transition-all"
                    title="NextJs"
                  />
                </a>
                <a
                  href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
                  target="_blank"
                >
                  <FaJsSquare
                    className="text-2xl md:text-3xl hover:scale-110 duration-200 cursor-pointer hover:text-yellow-400 transition-all"
                    title="Javascript"
                  />
                </a>
                <a href="https://www.typescriptlang.org/" target="_blank">
                  <BiLogoTypescript
                    className="text-3xl md:text-4xl hover:scale-110 duration-200 cursor-pointer -mt-[1px] hover:text-sky-600 transition-all"
                    title="Typescript"
                  />
                </a>
                <a
                  href="https://developer.mozilla.org/en-US/docs/Web/HTML"
                  target="_blank"
                >
                  <FaHtml5
                    className="text-2xl md:text-3xl hover:scale-110 duration-200 cursor-pointer hover:text-red-600 transition-all"
                    title="HTML"
                  />
                </a>
                <a
                  href="https://developer.mozilla.org/en-US/docs/Web/CSS"
                  target="_blank"
                >
                  <FaCss3Alt
                    className="text-2xl md:text-3xl hover:scale-110 duration-200 cursor-pointer hover:text-sky-600 transition-all"
                    title="CSS"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="md:w-[45%] md:ml-12 md:mt-8 mt-8 order-1 mx-auto">
          <Image
            src={pic.src}
            className=""
            alt="Web Development"
            width={600}
            height={360}
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
