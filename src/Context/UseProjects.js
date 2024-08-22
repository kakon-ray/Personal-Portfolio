import React, { createContext, useEffect, useState } from "react";
import WebBuilderImage from "../image/web builder it.png"
import WebBuilderImageDashboard from "../image/webbuilderdashboard.png"
import WebBuilderImageStudent from "../image/webbuilderStudentProfile.png"
import MarketPlace from "../image/marketplace.png"
import MedicineShop from "../image/Medicine.png"
export const useProjects = createContext();

export const ProjectsProvider = (props) => {
  const [projects, setProjects] = useState([
    {
      id: "1",
      name: "Online Course Management System",
      img: WebBuilderImage,
      img1: WebBuilderImageStudent,
      img2: WebBuilderImageDashboard,
      liveLink: "https://web-builderit.com",
      ServerRepoLink:
        "https://web-builderit.com/admin/login",
      description1: "This website is built with Laravel, Bootstrap and jQuery",
      description2:
        `Front-end Technology: JavaScript, JQuery, Bootstrap
         Back-end Technology: Laravel, PHP, MySQL`,
      description3: `Student Login: thisiskakonray@gmail.com, Password:12345678 //// 
      Admin Login: thisiskakonray@gmail.com, Password:13456789
      `,
    },

    {
      id: "2",
      name: "And Shop (Laravel, React Js, Next Js)",
      img: "https://i.ibb.co/PxVwM84/portfolio2.png",
      img1: "https://i.ibb.co/wyVN4qz/Screenshot-1.png",
      img2: "https://i.ibb.co/r3Xm2C3/Screenshot-2.png",
      liveLink: "https://andshop.netlify.app/",
      clientRepoLink: "https://github.com/kakon-ray/And-Shop-Client",
      ServerRepoLink: "https://github.com/kakon-ray/And-Shop-Client",
      description1: "MERN Stack Single page Multivendor E-commerce app",
      description2:
        "Front-end Technology: React.js, ES-6, Bootstrap5, React-Bootstrap5, CSS3",
      description3: "Back-end Technology: Node Js, Express Js, MongoDB.",
    },

    {
      id: "3",
      name: "Marketplace Admin (Laravel)",
      img: MarketPlace,
      img1: MarketPlace,
      img2: MarketPlace,
      liveLink: "https://marketplace.web-builderit.com",
      clientRepoLink: "https://github.com/kakon-ray/And-Shop-Client",
      ServerRepoLink: "https://github.com/kakon-ray/And-Shop-Client",
      description1: "MERN Stack Single page Multivendor E-commerce app",
      description2:
        "Front-end Technology: React.js, ES-6, Bootstrap5, React-Bootstrap5, CSS3",
      description3: "Admin Login: admin@envobyte.com, Password:12345678",
    },

    {
      id: "4",
      name: "Medicine Shop (Laravel, React.js)",
      img: MedicineShop,
      img1: MedicineShop,
      img2: MedicineShop,
      liveLink: "https://marketplace.web-builderit.com",
      clientRepoLink: "https://github.com/kakon-ray/And-Shop-Client",
      ServerRepoLink: "https://github.com/kakon-ray/And-Shop-Client",
      description1: "MERN Stack Single page Multivendor E-commerce app",
      description2:
        "Front-end Technology: React.js, ES-6, Bootstrap5, React-Bootstrap5, CSS3",
      description3: "Admin Login: admin@envobyte.com, Password:12345678",
    },

    {
      id: "5",
      name: "Engineering Workshop",
      img: "https://i.ibb.co/8r81vTs/profolio1.png",
      img1: "https://i.ibb.co/Rb7qyfR/engineering-2.png",
      img2: "https://i.ibb.co/8r81vTs/profolio1.png",
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
      id: "6",

      name: "Multicurt",
      img: "https://i.ibb.co/fGkDQnS/multicurt.png",
      img1: "https://i.ibb.co/cD90fyf/Screenshot-5.png",
      img2: "https://i.ibb.co/z2HJHN4/portfolio-5.png",
      liveLink: "https://multicart-baa75.web.app/",
      clientRepoLink: "https://github.com/kakon-ray/Multikart-Client",
      ServerRepoLink: "https://github.com/kakon-ray/Multicart-Server",
      description1: "MERN Stack Single page Multivendor E-commerce app",
      description2:
        "Front-end Technology: React.js, React Query, React Hooks Form, ES-6, Tailwind CSS, Tailwind Element, etc.",
      description3: "Back-end Technology: Node Js, Express Js, MongoDB.",
      description4: "",
    },

    {
      id: "7",
      name: "Logika",
      img: "https://i.ibb.co/HYgL4WT/portfolio4.png",
      img1: "https://i.ibb.co/N7bj8LZ/Screenshot-4.png",
      img2: "https://i.ibb.co/HYgL4WT/portfolio4.png",
      liveLink: "https://logika-warehouse.web.app/",
      clientRepoLink: "https://github.com/kakon-ray/Logika-Client",
      ServerRepoLink: "https://github.com/kakon-ray/Logika-Server",
      description1: "MERN stack single page Warehouse Management app",
      description2: "Front-end Technology: React.js, ES-6, Tailwind, CSS3",
      description3: "Back-end Technology: Node Js, Express Js, MongoDB.",
    },

    {
      id: "8",
      name: "Digital Hospital",
      img: "https://i.ibb.co/BqfS3L9/portfolio-3.png",
      img1: "https://i.ibb.co/pfDXWWK/Screenshot-3.png",
      img2: "https://i.ibb.co/BqfS3L9/portfolio-3.png",
      liveLink: "https://hospital-d7f7f.web.app/",
      clientRepoLink: "https://github.com/kakon-ray/Hospital",
      ServerRepoLink: "https://github.com/kakon-ray/Hospital-Server",
      description1: "MERN stack single page Hospital management app",
      description2:
        "Front-end Technology: React.js, ES-6, Bootstrap5, React-Bootstrap5, CSS3",
      description3: "Back-end Technology: Node Js, Express Js, MongoDB.",
    },
    {
      id: "9",
      name: "Doctors Portals",
      img: "https://i.ibb.co/P1THRMn/Screenshot-6.png",
      img1: "https://i.ibb.co/1ryfkCD/Screenshot-7.png",
      img2: "https://i.ibb.co/P1THRMn/Screenshot-6.png",
      liveLink: "https://doctors-portal-8a03e.web.app/",
      clientRepoLink: "https://github.com/kakon-ray/Doctors-Frontend",
      ServerRepoLink: "https://github.com/kakon-ray/Doctors-Server",
      description1: "MERN Stack Single page Doctors Portal Website",
      description2:
        "Front-end Technology: React.js, React Query, React Hooks Form, ES-6, Tailwind CSS, Tailwind Element, etc.",
      description3: "Back-end Technology: Node Js, Express Js, MongoDB.",
      description4: "",
    },
    {
      id: "10",
      name: "Car Services",
      img: "https://i.ibb.co/q0HY2bw/cartdoctor1.png",
      img1: "https://i.ibb.co/8bxhKj9/cardoctor2.png",
      img2: "https://i.ibb.co/q0HY2bw/cartdoctor1.png",
      liveLink: "https://the-car-doctor-limited.web.app/",
      clientRepoLink: "https://github.com/kakon-ray/Car-Doctor-Client",
      ServerRepoLink: "https://github.com/kakon-ray/Car-Doctor-Server",
      description1: "MERN Stack Single page Doctors Portal Website",
      description2:
        "Front-end Technology: React.js, React Query, React Hooks Form, ES-6, Tailwind CSS, Tailwind Element, etc.",
      description3: "Back-end Technology: Node Js, Express Js, MongoDB.",
      description4: "",
    },
    {
      id: "11",
      name: "Amazon",
      img: "https://i.ibb.co/ScbdwvK/amazon.png",
      img1: "https://i.ibb.co/8bxhKj9/cardoctor2.png",
      img2: "https://i.ibb.co/q0HY2bw/cartdoctor1.png",
      liveLink: "https://the-car-doctor-limited.web.app/",
      clientRepoLink: "https://github.com/kakon-ray/amazon",
      ServerRepoLink: "https://github.com/kakon-ray/Amazon-MernStuck",
      description1: "MERN Stack Single page Doctors Portal Website",
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
