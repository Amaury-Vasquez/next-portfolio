import { GrNode } from "react-icons/gr";
import { GiOpenBook, GiSoccerBall } from "react-icons/gi";
import {
  FaBrain,
  FaChessKnight,
  FaCss3,
  FaHtml5,
  FaUbuntu,
  FaReact,
} from "react-icons/fa";
import {
  SiCplusplus,
  SiMysql,
  SiTypescript,
  SiWebpack,
  SiJavascript,
  SiNextdotjs,
} from "react-icons/si";

export const useAbout = () => {
  // Constants
  const devSkills = [
    {
      color: "var(--blue)",
      icon: <FaReact />,
      text: "React JS (proficient)",
    },
    {
      color: "#2f74c0",
      icon: <SiTypescript />,
      text: "Typescript (proficient)",
    },
    {
      color: "#efd81d",
      icon: <SiJavascript />,
      text: "Javascript (proficient)",
    },
    { color: "#254bdd", icon: <FaCss3 />, text: "CSS (proficient)" },
    { color: "#dd4b25", icon: <FaHtml5 />, text: "HTML5 (proficient)" },
    {
      color: "white",
      icon: <SiNextdotjs />,
      text: "Next JS (intermediate)",
    },
    { color: "#86be00", icon: <GrNode />, text: "Express JS (intermediate)" },
    { color: "#8acff3", icon: <SiWebpack />, text: "Webpack (intermediate)" },
    { color: "white", icon: <SiMysql />, text: "MySQL (beginner)" },
    {
      color: "#6295cb",
      icon: <SiCplusplus />,
      text: "C/C++ (skillful)",
    },
    {
      color: "#e24d0e",
      icon: <FaUbuntu />,
      text: "GNU/Linux (intermediate)",
    },
  ];

  const otherSkills = [
    {
      color: "#f5ddc6",
      icon: <FaChessKnight />,
      text: "Chess player (advanced)",
    },
    {
      color: "white",
      icon: <GiSoccerBall />,
      text: "Soccer player (advanced)",
    },
    {
      color: "#2192FF",
      icon: <GiOpenBook />,
      text: "Continuos learner",
    },
    {
      color: "#f06d73",
      icon: <FaBrain />,
      text: "Open minded",
    },
  ];

  return { devSkills, otherSkills };
};
