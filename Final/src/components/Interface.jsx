import { motion } from "framer-motion";
import { useForm, ValidationError } from "@formspree/react";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
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
      <ContactSection />
    </div>
  );
};

const AboutSection = ({ onSectionChange }) => {
  return (
    <Section mobileTop>
      <h1 className=" text-4xl md:text-5xl    font-extrabold leading-snug text-black  md:mt-0">
        Hi, I'm
        <br />
        <span className="bg-transparent text-gray-600 px-1 text-4xl  italic">
          Rohan Andhariya
        </span>
      </h1>
      <motion.p
        className="text-md text-black font-semibold mt-4"
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.5 }}
      >
        SEO Executive skilled in keyword research, on-page & off-page SEO,
        <br />
        optimizing websites to boost rankings, drive organic traffic,
        <br />
        and improve online visibility.
      </motion.p>
      <motion.button
        className="bg-transparent text-gray-600 py-4 px-8 rounded-lg font-bold text-lg mt-5 border-gray-600 border-2"
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 2 }}
        onClick={() => onSectionChange(2)}
      >
        Get in touch
      </motion.button>
    </Section>
  );
};

const skills = [
  { title: "On Page / Off Page", level: 95 },
  { title: "Keyword Research & Competitor Analysis", level: 90 },
  { title: "Google Analytics (GA4)", level: 90 },
  { title: "Google Search Console (GSC)", level: 85 },
  { title: "SEMrush / SEO Tools", level: 75 },
  { title: "Content Writing", level: 70 },
  { title: "Google Ads / Meta Ads", level: 50 },
  { title: "Google My Business(GMB)", level: 80 },
  { title: "Social Media", level: 80 },
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
        <h2 className=" text-3xl md:text-5xl font-bold text-gray-600">Skills</h2>
        <div className="mt-8 space-y-4">
          {skills.map((skill, index) => {
            return (
              <div className=" w-full md:w-64 text-gray-600" key={index}>
                <motion.h3
                  className=" text-lg md:text-xl font-bold  text-gray-600"
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
                    className="h-full bg-gray-600  rounded-full "
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
        <h2 className="text-3xl md:text-5xl font-bold text-gray-600">Languages</h2>
        <div className="mt-8  space-y-4 text-gray-600">
          {Languages.map((lang, index) => {
            return (
              <div className="w-full md:w-64" key={index}>
                <motion.h3
                  className="text-lg md:text-xl font-bold text-gray-600"
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



const ContactSection = () => {
  const [state, handleSubmit] = useForm("xpqkwjjl");

  return (
    <Section>
      <h2 className="text-3xl md:text-5xl font-bold text-black">Contact me</h2>
      <div className="mt-8 p-8 rounded-md bg-primary bg-opacity-50 md:bg-opacity-100  w-96 max-w-full">
        {state.succeeded ? (
          <p className="text-white text-xl font-bold border-black p-2 rounded border-2  text-center">Thank you for your message!</p>
        ) : (
          <form onSubmit={handleSubmit}>
            <label
              htmlFor="name"
              className="font-bold text-black  block mb-1"
            >
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className="block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-secondary p-3"
              required
            />
            <ValidationError
              className="mt-1 text-gray-600"
              errors={state.errors}
            />
            <label
              htmlFor="email"
              className="font-bold text-black  block mb-1 mt-8"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-secondary  p-3"
              required
            />
            <ValidationError
              className="mt-1 text-gray-600"
              errors={state.errors}
            />
            <label
              htmlFor="email"
              className="font-bold text-black  block mb-1 mt-8"
            >
              Message
            </label>
            <textarea
              name="message"
              id="message"
              className="h-32 block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-secondary  p-3"
              required
            />
            <ValidationError
              className="mt-1 text-white"
              errors={state.errors}
            />
            <div className="flex gap-5 mt-10">
              <a
                href="https://www.linkedin.com/in/rohan-andhariya"
                target="_blank"
              >
                <FaLinkedin size={30} color="white" />
              </a>
              <a href="https://x.com/rohanandhariya" target="_blank">
                <FaXTwitter size={30} color="white" />
              </a>
              <a href="mailto:rohanandhariya@gmail.com" target="_blank">
                <MdOutlineEmail size={30} color="white" />
              </a>
              <a href="/Rohan_Andhariya_Resume.pdf" target="_blank">
                <TbFileCv size={30} color="white" />
              </a>
            </div>
            <button
              className="bg-transparent text-white py-4 px-8 rounded-lg font-bold text-lg mt-10 border-black border-2"
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
