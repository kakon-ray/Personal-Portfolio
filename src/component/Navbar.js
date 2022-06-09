import { useState } from "react";
import { Link, Router } from "react-router-dom";

const Navbar = ({ sendDataToParent }) => {
  let [open, setOpen] = useState(false);

  let Links = [
    { name: "Home", link: "/" },
    { name: "Service", link: "/services" },
    { name: "Blog", link: "/blog" },
    { name: "All Inventory", link: "/allinventory" },
  ];

  return (
    <div
      className="shadow-md w-full fixed top-0 left-0 right-0 z-10 lg:py-0"
      id="navbar"
    >
      <div className="lg:flex items-center justify-between bg-white py-4 lg:px-10 px-7 lg:py-2">
        <div
          className="font-bold text-2xl cursor-pointer flex items-center font-[Poppins] 
      text-gray-800"
        >
          <span className="xl:text-3xl md:text-xl text-indigo-600 flex items-center">
            {/* <Link to="/" className="text-purple-600 flex items-center"> */}
            <ion-icon name="logo-ionic" className="text-purple-600"></ion-icon>
            KAKON RAY
            {/* </Link> */}
          </span>
        </div>

        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-8 top-3 cursor-pointer lg:hidden text-black"
        >
          <ion-icon name={open ? "close" : "menu"}></ion-icon>
        </div>

        <div
          className={`absolute lg:static lg:z-auto z-[-1] left-0 w-full lg:w-auto transition-all duration-500 ease-in ${
            open ? "md:top-12 sm:top-6 shadow-md " : "top-[-490px]"
          } lg:shadow-none`}
        >
          <ul className="lg:flex lg:items-center lg:py-0 md:py-4 sm:py-4 pl-8">
            {Links.map((link) => (
              <li
                key={link.name}
                className="md:mr-5 xl:mr-12 lg:mr-8 text-lg md:my-3 my-7"
              >
                {/* <Link
                  to={link.link}
                  className="text-gray-500 hover:text-purple-700 duration-500 font-bold"
                > */}
                {link.name}
                {/* </Link> */}
              </li>
            ))}

            <div
              className={`form-check form-switch pl-0 xl:mx-6 md:my-6 sm:my-6 lg:my-0 xl:mb-0`}
            >
              <input
                className="form-check-input appearance-none w-9 rounded-full  h-5 align-top  bg-no-repeat checked:bg-purple-600 bg-gray-300 focus:outline-none cursor-pointer shadow-sm"
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
