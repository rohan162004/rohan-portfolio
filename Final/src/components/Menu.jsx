import React from "react";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { TbFileCv } from "react-icons/tb";

export const Menu = ({ onSectionChange, menuOpened, setMenuOpened }) => {
  return (
    <>
      <button
        onClick={() => setMenuOpened(!menuOpened)}
        className="z-20 fixed  top-4 right-4 md:top-12 md:right-12 p-3 bg-[#1F4E79] w-11 h-11 rounded-md"
      >
        <div
          className={`bg-white h-0.5 rounded-md w-full transition-all ${
            menuOpened ? "rotate-45  translate-y-0.5" : ""
          }`}
        />
        <div
          className={`bg-white h-0.5 rounded-md w-full my-1 ${
            menuOpened ? "hidden" : ""
          }`}
        />
        <div
          className={`bg-white h-0.5 rounded-md w-full transition-all ${
            menuOpened ? "-rotate-45" : ""
          }`}
        />
      </button>
      <div
        className={`z-10 fixed top-0 right-0 bottom-0 bg-white transition-all overflow-hidden flex flex-col
          ${menuOpened ? "w-full md:w-80" : "w-0"}`}
      >
        <div className="flex-1 flex items-start justify-center flex-col gap-6 p-8">
          <MenuButton label="About" onClick={() => onSectionChange(0)} />
          <MenuButton label="Skills" onClick={() => onSectionChange(1)} />
          <MenuButton label="Projects" onClick={() => onSectionChange(2)} />
          <MenuButton label="Contact" onClick={() => onSectionChange(3)} />
          <div className="flex gap-7">
            <a
              href="https://www.linkedin.com/in/valay-andhariya-753104248/"
              target="_blank"
            >
              <FaLinkedin size={30} />
            </a>
            <a href="https://github.com/AV1004" target="_blank">
              <FaGithub size={30} />
            </a>
            <a href="mailto:valay104@gmail.com" target="_blank">
              <MdOutlineEmail size={30} />
            </a>
            <a href="/Valay_Andhariya_Resume.pdf" target="_blank">
              <TbFileCv size={30} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

const MenuButton = (props) => {
  const { label, onClick } = props;
  return (
    <button
      onClick={onClick}
      className="text-2xl font-bold cursor-pointer hover:text-[#1F4E79] transition-colors"
    >
      {label}
    </button>
  );
};
