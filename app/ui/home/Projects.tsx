import donation from "@/public/projects/Donation-Crowdfunding.png";
import donationReward from "@/public/projects/donation-reward.png";
import imagegellary from "@/public/projects/Image-Gallery.png";
import meetingRoomz from "@/public/projects/Meetings-roomz.png";
import portfolioApp from "@/public/projects/portfolio-app.png";
import Image from "next/image";

import {
  FaBootstrap,
  FaCss3Alt,
  FaGithub,
  FaGithubAlt,
  FaReact,
  FaSass,
  FaStripe,
} from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io5";
import {
  SiMui,
  SiNextdotjs,
  SiReactquery,
  SiTailwindcss,
} from "react-icons/si";

interface CardItem {
  id: number;
  logo: any;
  name?: string;
  url?: string;
  github?: string;
  codeurl?: string;
  tags?: string[];
  tachstack?: any[];
}
const Projects = () => {
  const cardItem: CardItem[] = [
    {
      id: 1,
      logo: meetingRoomz,
      name: "Meeting Roomz",
      url: "https://dev.meetingroomz.com/",
      // github: "https://github.com/tejdevcode/nextjstea",
      // codeurl: "https://github1s.com/tejdevcode/nextjstea",
      tags: ["NextJS", "React-Query", "SCSS", "Stripe", "GitHub"],
      tachstack: [
        <SiNextdotjs />,
        <FaSass />,
        <SiReactquery />,
        <SiMui />,
        <FaStripe />,
        <FaHtml5 />,
        <FaCss3Alt />,
        <FaGithub />,
      ],
    },
    {
      id: 2,
      logo: donation,
      name: "Donation Go Fund",
      url: "https://demo.gofundestates.com/",
      // github: "https://github.com/tejdevcode/reactwptype",
      // codeurl: "https://github1s.com/tejdevcode/reactwptype",
      tags: ["ReactJS", "Bootstrap", "HTML", "SCSS", "Stripe", "GitHub"],
      tachstack: [
        <FaReact />,
        <FaSass />,
        <FaBootstrap />,
        <FaStripe />,
        <FaHtml5 />,
        <FaCss3Alt />,
        <FaGithub />,
      ],
    },
    {
      id: 3,
      logo: donationReward,
      name: "Donation Reward",
      url: "https://reward.gofundestates.com/",
      // github: "https://github.com/tejdevcode/nextjsdashboard",
      // codeurl: "https://github1s.com/tejdevcode/nextjsdashboard",
      tags: ["ReactJS", "Tailwind", "HTML", "SCSS", "Stripe", "GitHub"],
      tachstack: [
        <FaReact />,
        <FaSass />,
        <SiTailwindcss />,
        <FaStripe />,
        <FaHtml5 />,
        <FaCss3Alt />,
        <FaGithub />,
      ],
    },
    {
      id: 4,
      logo: portfolioApp,
      name: "Portfolio App",
      url: "https://vivek-portfolio-060424.netlify.app/",
      github: "https://github.com/vivek-munjapara/portfolio-app",
      codeurl: "https://github1s.com/vivek-munjapara/portfolio-app",
      tags: ["ReactJS", "Bootstrap", "HTML", "CSS", "Redux", "GitHub"],
      tachstack: [
        <FaReact />,
        <FaHtml5 />,
        <FaBootstrap />,
        <FaCss3Alt />,
        <FaGithub />,
      ],
    },
    {
      id: 5,
      logo: imagegellary,
      name: "Image Gellary",
      url: "https://vivek-portfolio-060424.netlify.app/",
      github: "https://github.com/vivek-munjapara/Image-Gallery",
      codeurl: "https://github1s .com/vivek-munjapara/Image-Gallery",
      tags: ["Java Script", "HTML", "CSS", "GitHub"],
      tachstack: [
        <IoLogoJavascript />,
        <FaHtml5 />,
        <FaCss3Alt />,
        <FaGithub />,
      ],
    },
  ];
  return (
    <div
      id="Projects"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10"
    >
      <div>
        <h2 className="text-3xl font-bold mb-5">Projects</h2>
        <div className="grid gap-1 my-5 auto-fill-[250px] ">
          {cardItem.map(item => (
            <div
              className=" border bg-gray-100 dark:bg-slate-800 duration-300 p-1 relative group overflow-hidden dark:border-gray-500"
              key={item?.id}
            >
              <figure className="relative w-full pb-[87%] border border-gray-300 bg-white">
                <Image
                  src={item?.logo}
                  className="w-full absolute object-cover"
                  alt={item?.name ?? "Projects"}
                />
                <div className="techicon absolute bottom-1 sm:bottom-0 flex w-full justify-center">
                  {item?.tachstack?.map((tech, i) => (
                    <span
                      key={i}
                      className="text-lg bg-gray-100/80 text-black rounded-sm p-1 mr-[1px]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </figure>

              <div className="sm:absolute sm:-top-[100%] group-hover:top-1 z-10 transition-all duration-300 w-full sm:h-full sm:bg-black sm:bg-opacity-75 left-0">
                <ul className="text-center sm:mt-7 p-2 sm:p-4">
                  {item?.tags?.map((tag, i) => (
                    <li
                      key={i}
                      className="inline-block bg-slate-300 dark:bg-slate-700 sm:bg-white sm:dark:bg-slate-600 rounded-full px-2 m-1 text-sm"
                    >
                      {tag === "AppRouter" ||
                      tag === "WPGraphQL" ||
                      tag === "WPACF" ||
                      tag === "GitHubPages" ? (
                        tag
                      ) : (
                        <a href="#Experiance">{tag} </a>
                      )}
                    </li>
                  ))}
                </ul>
              </div>

              <div className=" px-2 sm:py-4 flex justify-center sm:absolute sm:-bottom-36 sm:left-0 group-hover:bottom-0 transition-all duration-300 z-10 mx-auto w-full">
                {item?.github && (
                  <a
                    className="bg-blue-500 hover:bg-blue-700 text-white px-3 py-1 rounded m-1 leading-tight text-center"
                    href={item?.github}
                  >
                    Source code
                  </a>
                )}
                <a
                  className="bg-red-500 hover:bg-red-700 text-white px-3 py-1 rounded m-1 "
                  href={item?.url}
                  target="_blank"
                >
                  SiteDemo
                </a>
                {item?.codeurl && (
                  <a
                    className=" text-black sm:text-white dark:text-slate-100 px-1 py-1 rounded mx-1 mt-2 text-xl"
                    href={item?.codeurl}
                    target="_blank"
                    title="Code"
                  >
                    <FaGithubAlt />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
