import { motion } from "framer-motion";
import { useAtom } from "jotai";
import { currentProjectAtom, projects } from "./Projects";
import { useForm, ValidationError } from "@formspree/react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { TbFileCv } from "react-icons/tb";

const Section = (props) => {
  const { children, mobileTop } = props;
  return (
    <motion.section
      className={`h-screen w-screen p-8 max-w-screen-2xl mx-auto flex flex-col items-start  ${
        mobileTop ? "justify-start md:justify-center" : "justify-center"
      }`}
      initial={{
        opacity: 0,
        y: 50,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: {
          duration: 1,
          delay: 0.6,
        },
      }}
    >
      {children}
    </motion.section>
  );
};

export const Interface = ({ onSectionChange }) => {
  return (
    <div className="flex flex-col items-center w-screen">
      <AboutSection onSectionChange={onSectionChange} />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
    </div>
  );
};

const AboutSection = ({ onSectionChange }) => {
  return (
    <Section mobileTop>
      <h1 className=" text-4xl md:text-5xl    font-extrabold leading-snug text-[#1F4E79] md:mt-0">
        Hi, I'm
        <br />
        <span className="bg-[#1F4E79] text-white px-1 text-4xl  italic">
          Valay Andhariya
        </span>
      </h1>
      <motion.p
        className="text-md text-gray-600 mt-4"
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.5 }}
      >
        I create dynamic, responsive web apps using MongoDB, Express.js,
        <br />
        React.js, and Node.js. I also specialize in React Three Fiber for 3D
        <br />
        graphics. Welcome to my portfolio!
      </motion.p>
      <motion.button
        className="bg-[#FF6F3C] text-white py-4 px-8 rounded-lg font-bold text-lg mt-5"
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 2 }}
        onClick={() => onSectionChange(3)}
      >
        Get in touch
      </motion.button>
    </Section>
  );
};

const skills = [
  { title: "JavaScript", level: 95 },
  { title: "React", level: 90 },
  { title: "Node.js", level: 90 },
  { title: "Express.js", level: 85 },
  { title: "MongoDB / Postgre SQL", level: 75 },
  { title: "TypeScript", level: 70 },
  { title: "React Three Fiber", level: 50 },
  { title: "Git/GitHub", level: 80 },
  { title: "AWS", level: 80 },
];

// const Languages = [
//   {
//     title: "English",
//     level: 80,
//   },
//   {
//     title: "Hindi",
//     level: 90,
//   },
//   {
//     title: "Gujarati",
//     level: 100,
//   },
// ];

const SkillsSection = () => {
  return (
    <Section>
      <motion.div className="w-full" whileInView={"visible"}>
        <h2 className=" text-3xl md:text-5xl font-bold text-white">Skills</h2>
        <div className="mt-8 space-y-4">
          {skills.map((skill, index) => {
            return (
              <div className=" w-full md:w-64 text-white" key={index}>
                <motion.h3
                  className=" text-lg md:text-xl font-bold  text-white"
                  initial={{ opacity: 0 }}
                  variants={{
                    visible: {
                      opacity: 1,
                      transition: { duration: 1, delay: 1 + index * 0.2 },
                    },
                  }}
                >
                  {skill.title}
                </motion.h3>
                <div className="h-2 w-full bg-white rounded-full mt-2">
                  <motion.div
                    className="h-full bg-[#1F4E7A]  rounded-full "
                    style={{ width: `${skill.level}%` }}
                    initial={{ scaleX: 0, originX: 0 }}
                    variants={{
                      visible: {
                        scaleX: 1,
                        transition: { duration: 1, delay: 1 + index * 0.2 },
                      },
                    }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </motion.div>
      {/* <motion.div className="mt-10 w-full" whileInView={"visible"}>
        <h2 className="text-3xl md:text-5xl font-bold text-white">Languages</h2>
        <div className="mt-8  space-y-4 text-white">
          {Languages.map((lang, index) => {
            return (
              <div className="w-full md:w-64" key={index}>
                <motion.h3
                  className="text-lg md:text-xl font-bold text-white"
                  initial={{ opacity: 0 }}
                  variants={{
                    visible: {
                      opacity: 1,
                      transition: { duration: 1, delay: 2 + index * 0.2 },
                    },
                  }}
                >
                  {lang.title}
                </motion.h3>
                <div className="h-2 w-full bg-white rounded-full mt-2">
                  <motion.div
                    className="h-full bg-[#1F4E79]  rounded-full "
                    style={{ width: `${lang.level}%` }}
                    initial={{ scaleX: 0, originX: 0 }}
                    variants={{
                      visible: {
                        scaleX: 1,
                        transition: { duration: 1, delay: 2 + index * 0.2 },
                      },
                    }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </motion.div> */}
    </Section>
  );
};

const ProjectsSection = () => {
  const [currentProject, setCurrentProject] = useAtom(currentProjectAtom);

  const nextProject = () => {
    setCurrentProject((currentProject + 1) % projects.length);
  };

  const previousProject = () => {
    setCurrentProject((currentProject - 1 + projects.length) % projects.length);
  };

  return (
    <Section>
      <div className="flex w-full h-full gap-8 items-center justify-center mt-60">
        <button
          className="hover:text-white transition-colors"
          onClick={previousProject}
        >
          ← Previous
        </button>
        <h2 className="text-3xl md:text-5xl font-bold">Projects</h2>
        <button
          className="hover:text-white transition-colors"
          onClick={nextProject}
        >
          Next →
        </button>
      </div>
    </Section>
  );
};

const ContactSection = () => {
  const [state, handleSubmit] = useForm("mdknobky");

  return (
    <Section>
      <h2 className="text-3xl md:text-5xl font-bold">Contact me</h2>
      <div className="mt-8 p-8 rounded-md bg-[#1F4E79] bg-opacity-50 md:bg-opacity-100  w-96 max-w-full">
        {state.succeeded ? (
          <p className="text-white text-center">Thank you for your message!</p>
        ) : (
          <form onSubmit={handleSubmit}>
            <label
              htmlFor="name"
              className="font-medium text-white  block mb-1"
            >
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className="block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#1F4E79] p-3"
              required
            />
            <ValidationError
              className="mt-1 text-white"
              errors={state.errors}
            />
            <label
              htmlFor="email"
              className="font-medium  text-white block mb-1 mt-8"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#1F4E79]  p-3"
              required
            />
            <ValidationError
              className="mt-1 text-white"
              errors={state.errors}
            />
            <label
              htmlFor="email"
              className="font-medium  text-white block mb-1 mt-8"
            >
              Message
            </label>
            <textarea
              name="message"
              id="message"
              className="h-32 block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#1F4E79]  p-3"
              required
            />
            <ValidationError
              className="mt-1 text-white"
              errors={state.errors}
            />
            <div className="flex gap-5 mt-10">
              <a
                href="https://www.linkedin.com/in/valay-andhariya-753104248/"
                target="_blank"
              >
                <FaLinkedin size={30} color="white" />
              </a>
              <a href="https://github.com/AV1004" target="_blank">
                <FaGithub size={30} color="white" />
              </a>
              <a href="mailto:valay104@gmail.com" target="_blank">
                <MdOutlineEmail size={30} color="white" />
              </a>
              <a href="/Valay_Andhariya_Resume.pdf" target="_blank">
                <TbFileCv size={30} color="white" />
              </a>
            </div>
            <button
              className="bg-[#FF6F3C] text-white py-4 px-8 rounded-lg font-bold text-lg mt-10"
              disabled={state.submitting}
            >
              Submit
            </button>
          </form>
        )}
      </div>
    </Section>
  );
};
