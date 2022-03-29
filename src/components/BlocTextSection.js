import React from "react";
const classes = {
  blocContainer: "w-full h-auto bg-gray-200 mb-2 flex flex-col sm:px-40 px-10 ",
  headLineText:
    "pt-5 pb-1 text-xl text-green-700 font-bold border-b  border-indigo-200",
  descriptionText: " pb-2  text-md  w-3/2 mt-4 text-gray-600",
};

function BlocTextSection({ headline, description }) {
  return (
    <div data-aos="fade" className={classes.blocContainer}>
      <h2 className={classes.headLineText}>{headline}</h2>
      <p className={classes.descriptionText}>{description}</p>
    </div>
  );
}

export default BlocTextSection;
