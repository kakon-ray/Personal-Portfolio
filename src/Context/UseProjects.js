import React, { createContext, useEffect, useState } from "react";
import WebBuilderImage from "../image/web builder it.png"
import WebBuilderImageDashboard from "../image/webbuilderdashboard.png"
import WebBuilderImageStudent from "../image/webbuilderStudentProfile.png"
import MarketPlace from "../image/marketplace.png"
import MedicineShop from "../image/Medicine.png"
import CementShop from "../image/cementshop.png"
import MarketPlaceFrontend from "../image/marketplace frontend.png"
import MeetApp from "../image/MeetApp.png"
import MeetApp2 from "../image/MeetApp2.png"
import MeetApp3 from "../image/MeetApp3.png"
import Blog from "../image/Blog.png"
import Blog2 from "../image/Blog2.png"
import Blog3 from "../image/Blog3.png"

export const useProjects = createContext();

export const ProjectsProvider = (props) => {
  const [projects, setProjects] = useState([
    {
      id: "1",
      name: "Online Course Management System (Laravel)",
      img: WebBuilderImage,
      img1: WebBuilderImageStudent,
      img2: WebBuilderImageDashboard,
      liveLink: "https://web-builderit.com",
      clientRepoLink: "",
      ServerRepoLink:
        "",
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
      name: "And Shop FullStack (Next Js, Laravel)",
      img: "https://i.ibb.co/PxVwM84/portfolio2.png",
      img1: "https://i.ibb.co/wyVN4qz/Screenshot-1.png",
      img2: "https://i.ibb.co/r3Xm2C3/Screenshot-2.png",
      liveLink: "https://andshop.netlify.app/",
      clientRepoLink: "",
      ServerRepoLink: "",
      description1: "MERN Stack Single page Multivendor E-commerce app",
      description2:
        `Front-end Technology: React.js, ES-6, Bootstrap5, React-Bootstrap5, CSS3
        Back-end Technology: Node Js, Express Js, MongoDB.
        `,
      description3: "User / Vendor Login: thisiskakonray@gmail.com, Password:12345678",
    },

    {
      id: "3",
      name: "Marketplace Frontend (Next.js)",
      img: MarketPlaceFrontend,
      img1: MarketPlaceFrontend,
      img2: MarketPlaceFrontend,
      liveLink: "https://it-marketbd.netlify.app",
      clientRepoLink: "",
      ServerRepoLink: "",
      description1: "MERN Stack Single page Multivendor E-commerce app",
      description2:
        "Front-end Technology: JavaScript, Next.js, Redux and Bootstrap.",
      description3: "You can see all the features by logging in",
    },

    {
      id: "4",
      name: "Meet App (React Js)",
      img: MeetApp,
      img1: MeetApp2,
      img2: MeetApp3,
      liveLink: "https://k-meet.netlify.app",
      clientRepoLink: "",
      ServerRepoLink: "",
      description1: "React js meeting application",
      description2:
        "Front-end Technology: JavaScript, React.js, Node js, Tailwind css",    
      },

      {
        id: "5",
        name: "Multi User Blog (Laravel)",
        img: Blog,
        img1: Blog2,
        img2: Blog3,
        liveLink: "https://blog.web-builderit.com",
        clientRepoLink: "",
        ServerRepoLink: "",
        description1: "MERN Stack Single page Multivendor E-commerce app",
        description2:
          "Front-end Technology: JavaScript, Next.js, Redux and Bootstrap.",
        description3: "Admin Login: admin@envobyte.com, Password:12345678",
      },


    {
      id: "6",
      name: "And Shop (React Js)",
      img: "https://i.ibb.co/PxVwM84/portfolio2.png",
      img1: "https://i.ibb.co/wyVN4qz/Screenshot-1.png",
      img2: "https://i.ibb.co/r3Xm2C3/Screenshot-2.png",
      liveLink: "https://and-shop-3df4d.web.app/",
      clientRepoLink: "https://github.com/kakon-ray/And-Shop-Client",
      ServerRepoLink: "",
      description1: "MERN Stack Single page Multivendor E-commerce app",
      description2:
        `Front-end Technology: React.js, ES-6, Bootstrap5, React-Bootstrap5, CSS3
        Back-end Technology: Node Js, Express Js, MongoDB.
        `,
      description3: "User / Vendor Login: thisiskakonray@gmail.com, Password:12345678",
    },




    {
      id: "7",
      name: "Marketplace Admin & Backend API (Laravel)",
      img: MarketPlace,
      img1: MarketPlace,
      img2: MarketPlace,
      liveLink: "https://marketplace.web-builderit.com",
      clientRepoLink: "",
      ServerRepoLink: "",
      description1: "MERN Stack Single page Multivendor E-commerce app",
      description2:
        "Front-end Technology: JavaScript, Next.js, Redux and Bootstrap.",
      description3: "Admin Login: admin@envobyte.com, Password:12345678",
    },

    {
      id: "8",
      name: "Medicine Shop (Laravel, React.js)",
      img: MedicineShop,
      img1: MedicineShop,
      img2: MedicineShop,
      liveLink: "https://test.web-builderit.com/login",
      clientRepoLink: "",
      ServerRepoLink: "",
      description1: "MERN Stack Single page Multivendor E-commerce app",
      description2:
        "Front-end Technology: React.js, ES-6, Bootstrap5, React-Bootstrap5, CSS3",
      description3: "Admin Login: admin@envobyte.com, Password:12345678",
    },

    {
      id: "9",
      name: "Multicurt (React.js)",
      img: "https://i.ibb.co/fGkDQnS/multicurt.png",
      img1: "https://i.ibb.co/cD90fyf/Screenshot-5.png",
      img2: "https://i.ibb.co/z2HJHN4/portfolio-5.png",
      liveLink: "https://maltikart.netlify.app/",
      clientRepoLink: "",
      ServerRepoLink: "",
      description1: "MERN Stack Single page Multivendor E-commerce app",
      description2:
        "Front-end Technology: React.js, React Query, React Hooks Form, ES-6, Tailwind CSS, Tailwind Element, etc.",
      description3: "Back-end Technology: Node Js, Express Js, MongoDB.",
      description4: "",
    },

    {
      id: "10",
      name: "Engineering Workshop (React.js)",
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
      id: "11",
      name: "Logika (React.js)",
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
      id: "12",
      name: "Scaller Clinic (Laravel)",
      img: "https://i.ibb.co/BqfS3L9/portfolio-3.png",
      img1: "https://i.ibb.co/pfDXWWK/Screenshot-3.png",
      img2: "https://i.ibb.co/BqfS3L9/portfolio-3.png",
      liveLink: "https://hospital.web-builderit.com/",
      clientRepoLink: "https://github.com/kakon-ray/Medical-Laravel",
      ServerRepoLink: "https://github.com/kakon-ray/Medical-Laravel",
      description1: "Hospital / Clinic Management Website",
      description2:
        "Front-end Technology: Bootstrap5, CSS3, jQuery",
      description3: "Back-end Technology: Laravel, MYSQL, PHP",
    },

    {
      id: "13",
      name: "Shop Management (Laravel)",
      img: CementShop,
      img1: CementShop,
      img2: CementShop,
      liveLink: "https://cement-shop.web-builderit.com/",
      clientRepoLink: "https://github.com/kakon-ray/Cement-Shop",
      ServerRepoLink: "https://github.com/kakon-ray/Cement-Shop",
      description1: "Hospital / Clinic Management Website",
      description2:
        "Front-end Technology: Bootstrap5, CSS3, jQuery",
      description3: "Back-end Technology: Laravel, MYSQL, PHP",
    },

    {
      id: "14",
      name: "Doctors Portals (React.js)",
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
      id: "15",
      name: "Car Services (React.js)",
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
      id: "16",
      name: "Amazon (React.js)",
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
