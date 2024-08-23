// react Icons
import { FaLinkedin, FaGithub,  FaEnvelope } from 'react-icons/fa';
// image
import WeatherAppImage from "./image/Projects/Weather_App.png";
// skills
import html from "./skills/html.png";
import css from "./skills/css.png";
import javascript from "./skills/javascript.png";
import python from "./skills/Python.png";
import reactImg from "./skills/react.png";
import vite from "./skills/Vite.js.png";
import github from "./skills/github.png";
import git from "./skills/Git.png";
import tailwind from "./skills/tailwind.png";
import materialUI from "./skills/MaterialUI.png";
// ------------------------------------------------------------------------------------

export const description = "Skilled Computer Engineer specializing in dynamic, user-centric web applications. Passionate about tackling challenging projects and continuously expanding knowledge.";

export const links = [
    {
        id: 1,
        child: <FaLinkedin size={24} />,
        href: "https://www.linkedin.com/in/harsh-raolji-22b0131b2/"
    },
    {
        id: 2,
        child: <FaGithub size={24} />,
        href: "https://github.com/HarshRaolji003",
    },
    {
        id: 3,
        child: <FaEnvelope size={24} />,
        href: "mailto:harshraolji2003@gmail.com"
    },
];

export const tech = [
    {
        id: 1,
        src: html,
        title: 'HTML',
        style: 'shadow-orange-500'
    },
    {
        id: 2,
        src: css,
        title: 'CSS',
        style: 'shadow-blue-500'
    },
    {
        id: 3,
        src: javascript,
        title: 'JavaScript',
        style: 'shadow-yellow-500'
    },
    {
        id: 4,
        src: reactImg,
        title: 'React',
        style: 'shadow-blue-600'
    },
    {
        id: 5,
        src: tailwind,
        title: 'Tailwind',
        style: 'shadow-sky-400'
    },
    {
        id: 6,
        src: materialUI,
        title: 'Material UI',
        style: 'shadow-blue-400'
    },
    {
        id: 7,
        src: vite,
        title: 'Vite',
        style: 'shadow-purple-600'
    },
    {
        id: 8,
        src: github,
        title: 'GitHub',
        style: 'shadow-gray-400'
    },
    {
        id: 9,
        src: git,
        title: 'Git',
        style: 'shadow-orange-700'
    },
    {
        id: 10,
        src: python,
        title: 'Python',
        style: 'shadow-[#1e3a8a]'
    }
];

export const projects = [
    {
        id: 1,
        src: WeatherAppImage,
        code: "https://github.com/HarshRaolji003/Weather-Application.git",
        demo: "https://harshraolji003.github.io/Weather-Application/"
    }
];
