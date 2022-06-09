import { useState } from "react";
import { Link, Router } from "react-router-dom";
import "./Navbar.css";
const Navbar = ({ sendDataToParent }) => {
  let [open, setOpen] = useState(false);

  let Links = [
    { name: "Home", link: "#header" },
    { name: "Experence", link: "#skill" },
    { name: "Certificate", link: "#skill" },
    { name: "Projects", link: "#projects" },
    { name: "Blog", link: "/blog" },
    { name: "All Inventory", link: "/allinventory" },
  ];

  return (
    <div
      className="w-full sticky top-0 left-0 right-0 z-50 lg:py-0"
      id="sticky-div"
    >
      <div className="lg:flex items-center justify-between bg-none py-5 lg:px-10 px-7 lg:py-2">
        <div
          className="font-bold text-2xl cursor-pointer flex items-center font-[Poppins] 
      text-white"
        >
          <span className="xl:text-4xl py-4 md:text-xl text-white flex items-center">
            {/* <Link to="/" className="text-pink-600 flex items-center"> */}
            <ion-icon name="logo-ionic" className="text-white"></ion-icon>
            KAKON RAY
            {/* </Link> */}
          </span>
        </div>

        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-8 top-3 cursor-pointer lg:hidden text-white"
        >
          <ion-icon name={open ? "close" : "menu"}></ion-icon>
        </div>

        <div
          className={`absolute lg:static bg-black lg:z-auto z-[-1] left-0 w-full lg:w-auto transition-all duration-500 ease-in ${
            open ? "md:top-12 sm:top-9 shadow-md " : "top-[-490px]"
          } lg:shadow-none`}
        >
          <ul className="lg:flex lg:items-center  lg:py-0 md:py-4 sm:py-4 pl-8">
            {Links.map((link) => (
              <li
                key={link.name}
                className="md:mr-5 xl:mr-12 lg:mr-8 text-lg text-white md:my-3 my-7"
              >
                <a
                  href={link.link}
                  className="text-pink-600-500 hover:text-pink-700 duration-500 font-bold"
                >
                  {link.name}
                </a>
              </li>
            ))}

            <div
              className={`form-check form-switch pl-0 xl:mx-6 md:my-6 sm:my-6 lg:my-0 xl:mb-0`}
            >
              <input
                className="form-check-input appearance-none w-9 rounded-full  h-5 align-top bg-stone-600 bg-no-repeat checked:bg-pink-600 bg-pink-600-300 focus:outline-none cursor-pointer shadow-sm"
                type="checkbox"
                // onChange={(e) => sendDataToParent(e.target.checked)}
                role="switch"
                id="flexSwitchCheckChecked"
              />
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
