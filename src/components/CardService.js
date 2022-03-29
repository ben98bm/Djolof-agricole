import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa/";
import { MdDescription } from "react-icons/md";
import { FaTruck } from "react-icons/fa";
import { card1, card2, card3 } from "./Pages/Home/Data";
const classes = {
  cardServiceContainer:
    " w-full min-w-sm flex flex-col sm:flex-row items-center px-10 sm:px-40 sm:-mx-2 my-20",
  cardContainer: "  mt-4 sm:mx-2 sm:w-1/3",
  card:
    " flex flex-col items-center  space-y-4 h-full  shadow-2xl rounded-lg bg-white p-3 sm:p-4 md:p-8",
  IconContainer: "bg-gray-200 text-green-700 w-16  rounded-full p-2",
  cardIcon: "h-12 w-12",
  cardHeadline: "mt-4 text-gray-600 font-bold",
  cardDescription: "mt-2 text-sm text-gray-600",
};
function CardService({ headline, description }) {
  return (
    <div className={classes.cardServiceContainer}>
      <div data-aos="fade-left" className={classes.cardContainer}>
        <div className={classes.card}>
          <div className={classes.IconContainer}>
            <FaMapMarkerAlt className={classes.cardIcon}/>
          </div>

          <div className={classes.cardHeadline}>{card1.headline}</div>
          <div className={classes.cardDescription}>{card1.description}</div>
        </div>
      </div>
      <div data-aos="fade-up" className={classes.cardContainer}>
        <div className={classes.card}>
          <div className={classes.IconContainer}>
            <FaTruck className={classes.cardIcon} />
          </div>
          <div className={classes.cardHeadline}>{card2.headline}</div>
          <div className={classes.cardDescription}>{card2.description}</div>
        </div>
      </div>
      <div data-aos="fade-right" className={classes.cardContainer}>
        <div className={classes.card}>
          <div className={classes.IconContainer}>
            <MdDescription className={classes.cardIcon} />
          </div>

          <div className={classes.cardHeadline}>{card3.headline}</div>
          <div className={classes.cardDescription}>{card3.description}</div>
        </div>
      </div>

      
    </div>
  );
}

export default CardService;
