import React, { Suspense } from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  webm,
  mp4,
  source_code_link,
  live_site_link,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="w-full rounded-2xl bg-tertiary p-5 sm:w-[360px]"
      >
        <div className="relative h-[230px] w-full">
          <Suspense fallback={<Loader />}>
            <video
              autoPlay
              loop
              muted
              playsInline
              className="h-full w-full rounded-2xl object-cover"
            >
              <source src={webm} type="video/webm" />
              <source src={mp4} type="video/mp4" />
            </video>
          </Suspense>

          <div className="card-img_hover absolute inset-0 m-3 flex justify-end">
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="black-gradient flex h-10 w-10 cursor-pointer items-center justify-center rounded-full"
            >
              <img
                src={github}
                alt="source code"
                className="h-1/2 w-1/2 object-contain"
              />
            </div>
          </div>
        </div>

        <div className="mt-5">
          <h3 className="text-[24px] font-bold text-white">{name}</h3>
          <p className="mt-2 text-[14px] text-secondary">{description}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <Badge key={index} label={tag.name} />
          ))}
        </div>

        {/* btns to view live site and github code */}
        <div className="mt-4 flex gap-3">
          <Button label="Source code" type="code" link={source_code_link} />
          {live_site_link && (
            <Button label="Live site" type="live" link={live_site_link} />
          )}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>

      <div className="flex w-full">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 max-w-3xl text-[17px] leading-[30px] text-secondary"
        >
          Explore my portfolio of meticulously crafted projects, each offering a
          tangible demonstration of my skills and expertise in action. Delve
          into real-world examples that showcase my problem-solving finesse,
          versatility in working with diverse technologies, and my adept project
          management. Please note that the projects listed below are just a
          glimpse of the many captivating creations residing in my <Link />,
          awaiting discovery. 🚀💻
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

// badge component that is used in the project card
const Badge = ({ label }) => {
  return (
    <div class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
      {label}
    </div>
  );
};

// btn component that sends user to live site or github code
const Button = ({ label, type, link }) => {
  if (type === "live") {
    return (
      <button
        onClick={() => window.open(link, "_blank")}
        class="group relative mb-2 mr-2 inline-flex items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-pink-500 to-orange-400 p-0.5 text-sm font-medium text-gray-900 hover:text-white focus:outline-none focus:ring-4 focus:ring-pink-200 group-hover:from-pink-500 group-hover:to-orange-400 dark:text-white dark:focus:ring-pink-800"
      >
        <span class="relative rounded-md bg-white px-5 py-2.5 transition-all duration-75 ease-in group-hover:bg-opacity-0 dark:bg-gray-900">
          {label}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="ml-2 inline-block h-4 w-4 shrink-0 translate-y-px transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none"
            aria-hidden="true"
          >
            <path
              fill-rule="evenodd"
              d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </span>
      </button>
    );
  }

  if (type === "code") {
    return (
      <button
        onClick={() => window.open(link, "_blank")}
        className="group relative mb-2 mr-2 inline-flex items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-purple-600 to-blue-500 p-0.5 text-sm font-medium text-gray-900 hover:text-white focus:outline-none focus:ring-4 focus:ring-blue-300 group-hover:from-purple-600 group-hover:to-blue-500 dark:text-white dark:focus:ring-blue-800"
      >
        <span className="relative flex rounded-md bg-white px-5 py-2.5 transition-all duration-75 ease-in group-hover:bg-opacity-0 dark:bg-gray-900">
          <svg
            className="mr-2 h-4 w-4"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fill-rule="evenodd"
              d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
              clip-rule="evenodd"
            />
          </svg>
          {label}
        </span>
      </button>
    );
  }
};

const Link = () => {
  return (
    <a
      class="group/link inline-flex items-baseline text-base font-semibold leading-tight text-slate-200  hover:text-teal-300 focus-visible:text-teal-300"
      href="https://github.com/PresidentIsmail/"
      target="_blank"
      rel="noreferrer"
      aria-label="GitHub"
    >
      <span>
        GitHub
        <span class="ml-1 inline-block">
          repository
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="mx-1 inline-block h-4 w-4 shrink-0 translate-y-px transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none"
            aria-hidden="true"
          >
            <path
              fill-rule="evenodd"
              d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </span>
      </span>
    </a>
  );
};

// animated loading indicator for the project cards
const Loader = () => {
  return (
    <div className="flex flex-wrap gap-7">
      {[...Array(3)].map((_, index) => (
        <motion.div
          key={`loader-${index}`}
          variants={fadeIn("up", "spring", index * 0.5, 0.75)}
        >
          <CanvasLoader />
        </motion.div>
      ))}
    </div>
  );
};

export default SectionWrapper(Works, "work");
