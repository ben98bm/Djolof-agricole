import React from "react";

const classes = {
  buttonStyle: (primary, large) =>
    `rounded-full shadow-lg text-white  focus:outline-none
     ${
       primary && large
         ? " py-2 px-10 bg-red-600 hover:bg-red-800"
         : " py-1 px-4  bg-red-600 hover:bg-red-800"
     }`,
};
export const Button = ({ primary, large, children, type, onClick }) => {
  return (
    <button
      className={classes.buttonStyle(primary, large)}
      onClick={onClick} 
      type={type}
    >
      {children}
    </button>
  );
};
export default Button;
