import Image from "next/image";
import { FiExternalLink } from "react-icons/fi";
import { TbPointFilled } from "react-icons/tb";
import weltecCeri from "../../../public/awards/weltec.png";
import EOM from "../../../public/awards/EOM.png";

const About = () => {
  const awards = [
    {
      image: EOM,
      description: " Employee of the Month - Jul 2022",
    },
  ];
  const Achievements = [
    {
      image: weltecCeri,
      description: "Frontend Developement with ReactJs",
    },
  ];
  return (
    <div
      id="About"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20"
    >
      <div>
        <div>
          <h2 className="text-3xl font-bold mb-5">About</h2>
          <p>
            Sr. Software Engineer with a demonstrator skill in HTML, CSS,
            JavaScript, ReactJs/NextJs nearly 2 Year experience as a frontend
            developer (React JS). Additionally Skilled in Software Hardware
            troubleshooting and configuration, Social Media Marketing on various
            platform. Also, good awareness of graphical platform like Adobe
            Photoshop Strong IT professional with a Bachelor of Computer
            Application (BCA) from Saurastra University.
          </p>
          <br />
          <h2 className="text-red-600 font-semibold text-xl">
            Education & Training
          </h2>
          <ul>
            <li className="flex items-center gap-2">
              <TbPointFilled />
              <span>
                Project base technical training under taken as Frontend
                Developer (React JS) at WELTEC IT Training Center - Vadodara.
              </span>
            </li>
            <li className="flex items-center gap-2">
              <TbPointFilled />
              <span>
                Completed Bachelor of Computer Application (BCA) from Saurastra-
                University.
              </span>
            </li>
            <li className="flex items-center gap-2">
              <TbPointFilled />
              <span>Completed H.S.C with 67% from G.H.S.E.B.</span>
            </li>
          </ul>
          <br />
          <h2 className="text-red-600 font-semibold text-xl">
            Skills & Expertise In
          </h2>
          <ul>
            <li className="flex gap-2">
              <div className="w-[15px] mt-1">
                <TbPointFilled />
              </div>
              <div>
                Expert in React.js and Next.js development, leveraging
                cutting-edge frontend technologies like HTML5, CSS3, JavaScript,
                TypeScript, SCSS, Bootstrap, Tailwind CSS, and MUI to build
                high-performance, responsive web applications. Proficient in
                state management with React Redux and React Query, ensuring
                efficient data handling, caching, and real-time updates. Skilled
                in REST API integration, version control with Git/GitHub, and
                crafting intuitive UI/UX designs for superior user engagement
                and seamless collaboration.
              </div>
            </li>
          </ul>

          <br />
          <h2 className="text-red-600 font-semibold text-xl mb-2">
            Professional Experience
          </h2>
          <ul className="space-y-4 list-disc pl-3 sm:pl-4">
            <li>
              <h3 className="italic font-semibold ">
                Sr. Software Engineer ( Jul 2024 - Present )
              </h3>
              <p className="mb-2 flex items-center">
                ⚡{" "}
                <a
                  href="https://unikwork.com/"
                  className="underline hover:no-underline"
                >
                  Unikwork Systems LLP
                  <FiExternalLink className="inline-block ml-2" />
                </a>{" "}
              </p>
              <p>
                Develop scalable, high-performance web applications using
                React.js, Next.js, MUI, and Tailwind CSS while optimizing for
                SEO and user experience. Architect reusable components,
                integrate REST APIs, and manage state efficiently with React
                Query and Redux. Implement secure payment gateways, conduct
                thorough testing & debugging, and ensure code quality through
                mentorship and best practices. Collaborate with cross-functional
                teams and engage with clients to deliver innovative solutions
                while staying updated with the latest frontend technologies.
              </p>
            </li>
            <li>
              <h3 className="italic font-semibold ">
                Frontend Developer ( Mar 2023 - Jul 2024 )
              </h3>
              <p className="mb-2 flex items-center">
                ⚡{" "}
                <a
                  href="https://www.rockersinfo.com/"
                  className="underline hover:no-underline"
                >
                  Rockers Technologies
                  <FiExternalLink className="inline-block ml-2" />
                </a>{" "}
              </p>
              <p>
                Developed and managed responsive web applications using
                React.js, HTML, CSS, JavaScript, Bootstrap, and Tailwind CSS.
                Built reusable components, integrated APIs for real-time data,
                and optimized UI for performance and scalability. Translated
                designs into high-quality code, ensuring cross-browser
                compatibility. Conducted thorough testing and debugging,
                resolving issues to maintain code quality and seamless user
                experience.
              </p>
            </li>
          </ul>
          <br />
          <br />
        </div>
        <div className="flex justify-around">
          <div className="w-auto">
            <h2 className="text-red-600 font-semibold text-xl mb-2">
              Achievements & Awards
            </h2>
            <div>
              {awards?.map((item, i) => (
                <figure className="" key={i}>
                  <a
                    href={`${item.image.src}`}
                    className="glightbox3 border border-gray-200 rounded shadow-sm inline-block  "
                    data-gallery="gallery1"
                    target="_blank"
                    title={item?.description}
                  >
                    <Image
                      src={item.image}
                      alt={item?.description ?? "Focus On Growth Award"}
                      width={300}
                      height={200}
                      className="w-full sm:w-auto"
                    />
                  </a>

                  <figcaption className="text-sm capitalize mb-2">
                    <a href={`${item.image.src}`} target="_blank">
                      Awarded for the best <br />
                      {item?.description}
                    </a>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>

          <div className="w-auto">
            <h2 className="text-red-600 font-semibold text-xl mb-2">
              Certifications
            </h2>
            <ul>
              {Achievements?.map((item, i) => (
                <figure className="" key={i}>
                  <a
                    href={`${item.image.src}`}
                    className="glightbox3 border border-gray-200 rounded shadow-sm inline-block  "
                    data-gallery="gallery1"
                    target="_blank"
                    title={item?.description}
                  >
                    <Image
                      src={item.image}
                      alt={item?.description ?? "Focus On Growth Award"}
                      width={300}
                      height={200}
                      className="w-full sm:w-auto"
                    />
                  </a>

                  <figcaption className="text-sm capitalize mb-2">
                    <a href={`${item.image.src}`} target="_blank">
                      Certifications <br />
                      {item?.description}
                    </a>
                  </figcaption>
                </figure>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
