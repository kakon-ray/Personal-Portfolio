/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from "react";
import { Link, Router } from "react-router-dom";
import "./Navbar.css";
import img from "../../image/str2.png";
const Navbar = ({ sendDataToParent }) => {
  let [open, setOpen] = useState(false);

  let Links = [
    { name: "Home", link: "/" },
    { name: "About Me", link: "#about" },
    { name: "Services", link: "#services" },
    { name: "Experence", link: "#skill" },
    { name: "Projects", link: "#projects" },
    { name: "Certificate", link: "#skill" },
    { name: "Contact", link: "#contact" },
  ];

  return (
    <nav class=" w-full flex flex-wrap sticky top-0 z-50  justify-between py-2 dark:bg-black bg-white text-gray-200 shadow-lg navbar navbar-expand-lg navbar-light">
      <div class="container-fluid w-full flex flex-wrap items-center justify-between px-6 lg:mx-8">
        <button
          class="navbar-toggler dark:text-gray-200 text-gray-700  border-0 hover:shadow-none hover:no-underline py-2 px-2.5 bg-transparent focus:outline-none focus:ring-0 focus:shadow-none focus:no-underline"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent1"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="bars"
            class="w-6"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            <path
              fill="currentColor"
              d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"
            ></path>
          </svg>
        </button>
        <div
          class="collapse navbar-collapse flex-grow items-center"
          id="navbarSupportedContent1"
        >
          <Link to="/">
            <span className="xl:text-3xl py-2 font-bold md:text-xl text-yellow-500 dark:text-white flex items-center">
              {/* <Link to="/" className="text-pink-600 flex items-center"> */}
              <img src={img} className="w-10 h-10" alt="" />
              KAKON RAY
              {/* </Link> */}
            </span>
          </Link>

          <ul class="navbar-nav flex flex-col  pt-1 pl-0 list-style-none lg:ml-12 mr-auto">
            {Links.map((item) => {
              return (
                <li class="nav-item p-2">
                  <a
                    class="nav-link dark:text-white text-gray-800 uppercase font-bold opacity-60 hover:opacity-80 focus:opacity-80 p-0"
                    href={item.link}
                  >
                    {item.name}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
        <div class="flex items-center relative ml-2 lg:ml-0">
          <div
            className={`form-check form-switch pl-0 md:my-6 sm:my-6 lg:my-0 xl:mb-0`}
          >
            <input
              className="form-check-input appearance-none w-9 rounded-full  h-5 align-top bg-stone-600 bg-no-repeat dark:checked:bg-yellow-500 checked:bg-pink-600 bg-pink-600 focus:outline-none cursor-pointer shadow-sm"
              type="checkbox"
              onChange={(e) => sendDataToParent(e.target.checked)}
              role="switch"
              id="flexSwitchCheckChecked"
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
