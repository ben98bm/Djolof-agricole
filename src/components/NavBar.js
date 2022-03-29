import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import clsx from "clsx";
import { Link as ScrollLink } from "react-scroll";
import { Link } from "react-router-dom";
import Button from "./Button";
import FormContact from "./FormContact";
import FormLogin from "./FormLogin";

import { useHistory } from "react-router-dom";
import { authenticationHelper } from "../utils/AuthenticationHelper";
import { userService } from "../service/userService";

const classes = {
  navbar:
    "flex  relative justify-between  items-center text-lg font-quicksand select-none text-grey-900 bg-green-900 h-20 px-10  sticky top-0 z-20",

  menuLarge: "hidden sm:flex space-x-10 items-center h-10  ",
  logoLink: "cursor-pointer flex space-x-3  text-2xl font-bold",
  menuItem: "",
  menuLink:
    "text-white cursor-pointer hover:text-blue-200 border-b-4 pb-1 border-green-900 hover:border-white ",
  menuButton: "",
  menuIcon: "flex cursor-pointer text-2xl text-white sm:hidden ",
  menuMobile: (click) =>
    `${
      click
        ? "flex flex-col bg-green-600 space-y-10 py-5 items-center absolute top-20 left-0 h-screen w-full z-10 sm:hidden"
        : "hidden"
    }`,
  modalLoginForm: (openLogin) =>
    `${
      openLogin
        ? "bg-black bg-opacity-50 absolute inset-0 h-screen w-full z-40 "
        : "hidden"
    }`,
  wrapperForm:
    "flex h-full bg-gray-800 rounded-lg flex-col justify-center items-center ",
  closeIcon:
    "bg-gray-500 rounded-full h-8 w-8 text-red-500 hover:text-red-800 cursor-pointer mt-2 ",
  // closeModal: "flex bg-blue-800 justify-center items-center w-full h-20 -mb-30",
  formContact: "",
};

function NavBar() {
  const [showMenuMobile, setShowMenuMobile] = useState(false);
  const handleClick = () => setShowMenuMobile(!showMenuMobile);
  const closeMobileMenu = () => setShowMenuMobile(false);
  const [openLogin, setOpenLogin] = useState(false);
  const [openLogout, setOpenLogout] = useState(false);

  let history = useHistory();
  useEffect(() => {
    // showLargeMenu();
  }, []);

  return (
    <>
      <div className={classes.navbar}>
        <ScrollLink to="accueil" className={classes.logoLink} onClick={closeMobileMenu}>
          <img className="object-cover h-20" src="images/LOGO.jpg" alt="logo" />
          {/* <h4 className="text-yellow-200"> Djolof Agricole</h4> */}
        </ScrollLink>
        <div className={classes.menuIcon} onClick={handleClick}>
          {showMenuMobile ? <FaTimes /> : <FaBars />}
        </div>
        <ul className={classes.menuMobile(showMenuMobile)}>
          <ScrollLink to="accueil" smooth={true} onClick={closeMobileMenu}>
            <span className={classes.menuLink}> Accueil</span>
          </ScrollLink>
          <ScrollLink to="section2" smooth={true} onClick={closeMobileMenu}>
            <span className={classes.menuLink}> A propos</span>
          </ScrollLink>
          <ScrollLink to="Concetps" smooth={true} onClick={closeMobileMenu}>
            <span className={classes.menuLink}> Concepts</span>
          </ScrollLink>

          <ScrollLink to="contact" smooth={true} onClick={closeMobileMenu}>
            <span className={classes.menuLink}> Contact</span>
          </ScrollLink>
          {/* <li className={classes.menuItem} onClick={closeMobileMenu}>
            <Link to="" className={classes.menuLink}>
              {" "}
              Accueil
            </Link>
          </li>
          <li className={classes.menuItem} onClick={closeMobileMenu}>
            <Link to="" className={classes.menuLink}>
              {" "}
              About
            </Link>
          </li>
          <li className={classes.menuItem} onClick={closeMobileMenu}>
            <Link to="" className={classes.menuLink}>
              {" "}
              Contact
            </Link>
          </li> */}
          {/* <li className={classes.menuButton} onClick={closeMobileMenu}>
            <Button
              primary={true}
              large={true}
              onClick={() => {
                setOpenLogin(true);
              }}
            >
              Connexion
            </Button>
          </li> */}
        </ul>

        <div className={classes.menuLarge}>
          <ScrollLink to="accueil" smooth={true}>
            <span className={classes.menuLink}> Accueil</span>
          </ScrollLink>
          <ScrollLink to="section2" smooth={true}>
            <span className={classes.menuLink}> A propos</span>
          </ScrollLink>
          <ScrollLink to="service" smooth={true}>
            <span className={classes.menuLink}> Concepts</span>
          </ScrollLink>

          <ScrollLink to="contact" smooth={true}>
            <span className={classes.menuLink}> Contact</span>
          </ScrollLink>
          {/* {authenticationHelper.isUserLoggedIn() ? (
            <span>
              <svg
                onClick={() => {
                  setOpenLogout(!openLogout);
                }}
                className="h-8 w-8  text-white rounded-full cursor-pointer "
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          ) : (
            <span className={classes.menuButton}>
              <Button
                primary={true}
                large={false}
                onClick={() => {
                  setOpenLogin(true);
                }}
              >
                Connexion
              </Button>
            </span>
          )} */}
        </div>
        <div className={classes.modalLoginForm(openLogin)}>
          <div className={classes.wrapperForm}>
            <svg
              onClick={() => {
                setOpenLogin(false);
              }}
              className={classes.closeIcon}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
            <FormLogin
              setOpenLogin={setOpenLogin}
              className={classes.formContact}
            />
          </div>
        </div>
        <ul
          className={`${
            openLogout
              ? "bg-gray-400 text-gray-700 divide-y-4 border-t-4 absolute top-20 right-1   rounded-b-lg  hidden sm:flex flex-col"
              : "hidden"
          }`}
        >
          <li>
            {" "}
            <button
              className=" px-3 my-3"
              onClick={() => {
                setOpenLogout(false);
                history.push("/app");
              }}
            >
              Mon Espace
            </button>
          </li>

          <li>
            {" "}
            <button
              className="px-3 my-3"
              onClick={() => {
                userService.logout();
                setOpenLogout(false);
                history.push("/");
              }}
            >
              Déconnexion
            </button>
          </li>
        </ul>
      </div>
    </>
  );
}
export default NavBar;
