import photoshop from "@/public/adobe_photoshop_cs6_icon.svg";
import bootstrap from "@/public/bootstrap_logo.svg";
import css from "@/public/css3_logo.svg";
import git from "@/public/git_icon.svg";
import github from "@/public/github.svg";
import html from "@/public/html5.svg";
import javascript from "@/public/javascript.svg";
import Mui from "@/public/Mui-log.svg";
import netlify from "@/public/netlify.svg";
import nextjs from "@/public/nextjs.svg";
import postman from "@/public/postman-logo.svg";
import react from "@/public/react-icon.svg";
import reactQuery from "@/public/react-query.png";
import sass from "@/public/sass.svg";
import stripe from "@/public/Stripe.svg";
import tailwind from "@/public/tailwind_css_logo.svg";
import typescript from "@/public/typescript_logo_2020.svg";
import vercel from "@/public/vercellogo.svg";
import Image from "next/image";

function Experiance() {
  const frontendItem = [
    {
      id: 1,
      logo: html,
      name: "HTML",
      url: "https://developer.mozilla.org/en-US/docs/Web/HTML",
    },
    {
      id: 2,
      logo: css,
      name: "CSS",
      url: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    },
    {
      id: 3,
      logo: javascript,
      name: "JavaScript",
      url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    },
    {
      id: 4,
      logo: react,
      name: "ReactJs",
      url: "https://react.dev/",
    },
    {
      id: 5,
      logo: nextjs,
      name: "NextJs",
      url: "https://nextjs.org/",
    },
    {
      id: 6,
      logo: typescript,
      name: "Typescript",
      url: "https://www.typescriptlang.org/",
    },
    {
      id: 20,
      logo: Mui,
      name: "Meterial Ui",
      url: "https://mui.com/?srsltid=AfmBOooblBm6taX-zt3rD4neV6fuuOPvj94C9LKNIFI-nS6lZLsylTJU",
    },
    {
      id: 8,
      logo: bootstrap,
      name: "Bootstrap",
      url: "https://getbootstrap.com/",
    },
    {
      id: 9,
      logo: tailwind,
      name: "Tailwind",
      url: "https://tailwindcss.com/",
    },
    {
      id: 10,
      logo: sass,
      name: "sass",
      url: "https://sass-lang.com/",
    },
    {
      id: 11,
      logo: photoshop,
      name: "photoshop",
    },
    {
      id: 12,
      logo: vercel,
      name: "vercel nextjs",
      url: "https://vercel.com/",
    },
    {
      id: 13,
      logo: github,
      name: "github",
      url: "https://github.com/",
    },
    {
      id: 14,
      logo: git,
      name: "git",
      url: "https://git-scm.com/",
    },
    {
      id: 15,
      logo: netlify,
      name: "netlify",
      url: "https://www.netlify.com/",
    },
    {
      id: 19,
      logo: Mui,
      name: "Meterial Ui",
      url: "https://mui.com/?srsltid=AfmBOooblBm6taX-zt3rD4neV6fuuOPvj94C9LKNIFI-nS6lZLsylTJU",
    },
    {
      id: 18,
      logo: postman,
      name: "Postman",
      url: "https://www.postman.com/",
    },
    {
      id: 16,
      logo: reactQuery,
      name: "React-Query",
      url: "https://tanstack.com/query/latest",
    },
    {
      id: 17,
      logo: stripe,
      name: "Stripe",
      url: "https://stripe.com/in",
    },
  ];

  return (
    <div
      id="Experiance"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16"
    >
      <div>
        <h2 className="text-3xl font-bold mb-5">
          {" "}
          Skills & Technologies Experience
        </h2>
        <div className=" flex flex-wrap justify-between gap-6">
          <div className="techitem w-full">
            <h3 className="text-red-600 font-semibold text-xl mb-2">
              Frontend
            </h3>
            <div className="grid auto-fill-[90px] gap-2 my-3">
              {frontendItem?.map(item => (
                <div key={item?.id}>
                  <figure
                    className={`flex flex-col items-center justify-center border-[2px] rounded-md size-24 shadow-md p-1  hover:scale-110 duration-300 mb-1 dark:bg-slate-700 dark:border-gray-400 w-full ${
                      item?.url ? "cursor-pointer" : ""
                    }`}
                  >
                    {item?.url ? (
                      <a href={item?.url} target="_blank">
                        <Image
                          src={item?.logo}
                          className="w-[60px]"
                          alt={`${item?.name} skill`}
                          title={item?.name}
                        />
                      </a>
                    ) : (
                      <Image
                        src={item?.logo}
                        className="w-[60px]"
                        alt={`${item?.name} skill`}
                        title={item?.name}
                      />
                    )}
                  </figure>
                  <div>
                    <h4 className="text-center capitaliz">{item?.name}</h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experiance;
