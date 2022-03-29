import React, { useState, useEffect } from "react";
import { Button } from "./Button";
import { Link } from "react-router-dom";

const classes = {
  heroSection:
    "w-full sm:h-screen flex flex-col-reverse space-y-4  sm:flex-row justify-around items-center px-10 pb-4 bg-hero-background ",
  textContainer: (isAnimated) =>
    `${
      isAnimated ? "scale-y-100" : "scale-y-0"
    } flex flex-col space-y-5 min-w-sm justify-between items-center sm:flex-col justify-center sm:items-start transform transition duration-1000 ease-in-out `,
  headlineText: "font-quicksand text-5xl font-bold text-gray-200",
  descriptionText:
    "text-center sm:text-left font-quicksand font-light max-w-lg text-xl text-gray-200",
  imageContainer: "flex-shrink-0  ",
  image: (isAnimated) => 
    `${
      isAnimated ? "scale-100" : "translate-x-full translate-y-full "
    } rounded-full object-cover border-4 border-white bg-white transform transition duration-1000 `,
};

function HeroSection({
  backgroundPrimary,
  headline,
  description,
  buttonLabel,
  img ,
  alt,
}) {
  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    setIsAnimated(true);
  }, []);

  return (
    <div className={classes.heroSection} id="accueil">
      <div className={classes.textContainer(isAnimated)}>
        <h1 className={classes.headlineText}>{headline}</h1>
        <p className={classes.descriptionText}>{description}</p>
        <Button primary={true} large={true}>
          {buttonLabel}
        </Button>
      </div>

      <div className={classes.imageContainer}>
        <img className={classes.image(isAnimated)} src={img} alt={alt} />
      </div>
    </div>
  );
}

export default HeroSection;
