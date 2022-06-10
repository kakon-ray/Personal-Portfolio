import React, { createContext, useEffect, useState } from "react";

export const useProjects = createContext();

export const ProjectsProvider = (props) => {
  const [projects, setProjects] = useState([
    {
      id: "1",
      name: "Engineering Workshop",
      img: "https://i.ibb.co/8r81vTs/profolio1.png",
      liveLink: "https://engineering-workshop-a0bd0.web.app/",
      clientRepoLink:
        "https://github.com/kakon-ray/Engineering-Workshop-Client",
      ServerRepoLink:
        "https://github.com/kakon-ray/Engineering-Workshop-Server",
      description1: "MERN Stack Single page  Work Shop management web app",
      description2:
        "Front-end Technology: React.js, React Query, React Hooks Form, ES-6, Tailwind CSS, Tailwind Element, etc.",
      description3: "Back-end Technology: Node Js, Express Js, MongoDB.",
    },
    {
      id: "2",
      name: "And Shop",
      img: "https://i.ibb.co/PxVwM84/portfolio2.png",
      liveLink: "https://and-shop-3df4d.web.app/",
      clientRepoLink: "https://github.com/kakon-ray/And-Shop-Client",
      ServerRepoLink: "https://github.com/kakon-ray/And-Shop-Client",
      description1: "MERN Stack Single page Multivendor E-commerce app",
      description2:
        "Front-end Technology: React.js, ES-6, Bootstrap5, React-Bootstrap5, CSS3",
      description3: "Back-end Technology: Node Js, Express Js, MongoDB.",
    },
    {
      id: "3",
      name: "Digital Hospital",
      img: "https://i.ibb.co/BqfS3L9/portfolio-3.png",
      liveLink: "https://hospital-d7f7f.web.app/",
      clientRepoLink: "https://github.com/kakon-ray/Hospital",
      ServerRepoLink: "https://github.com/kakon-ray/Hospital-Server",
      description1: "MERN stack single page Hospital management app",
      description2:
        "Front-end Technology: React.js, ES-6, Bootstrap5, React-Bootstrap5, CSS3",
      description3: "Back-end Technology: Node Js, Express Js, MongoDB.",
    },
    {
      id: "4",
      name: "Logika",
      img: "https://i.ibb.co/HYgL4WT/portfolio4.png",
      liveLink: "https://logika-warehouse.web.app/",
      clientRepoLink: "https://github.com/kakon-ray/Logika-Client",
      ServerRepoLink: "https://github.com/kakon-ray/Logika-Server",
      description1: "MERN stack single page Warehouse Management app",
      description2: "Front-end Technology: React.js, ES-6, Tailwind, CSS3",
      description3: "Back-end Technology: Node Js, Express Js, MongoDB.",
    },
    {
      id: "5",
      name: "Multicurt",
      img: "https://i.ibb.co/z2HJHN4/portfolio-5.png",
      liveLink: "https://multikart-react.vercel.app/",
      clientRepoLink: "https://github.com/kakon-ray/Multikart-Client",
      ServerRepoLink: "https://github.com/kakon-ray/Multicart-Server",
      description1: "MERN Stack Single page Multivendor E-commerce app",
      description2:
        "Front-end Technology: React.js, React Query, React Hooks Form, ES-6, Tailwind CSS, Tailwind Element, etc.",
      description3: "Back-end Technology: Node Js, Express Js, MongoDB.",
      description4: "",
    },
    {
      id: "6",
      name: "Engineering Workshop",
      img: "https://i.ibb.co/PxVwM84/portfolio2.png",
      liveLink: "Engineering Workshop",
      clientRepoLink: "Engineering Workshop",
      ServerRepoLink: "Engineering Workshop",
      description1: "MERN Stack Single page Multivendor E-commerce app",
      description2:
        "Front-end Technology: React.js, React Query, React Hooks Form, ES-6, Tailwind CSS, Tailwind Element, etc.",
      description3: "Back-end Technology: Node Js, Express Js, MongoDB.",
      description4: "",
    },
  ]);

  return (
    <useProjects.Provider value={[projects, setProjects]}>
      {props.children}
    </useProjects.Provider>
  );
};
