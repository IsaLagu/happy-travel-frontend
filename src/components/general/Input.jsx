import React, { forwardRef } from "react";

const Input = ({ type = "text", id, className, placeholder, ...rest }) => {
  return (
    <input
      type={type}
      id={id}
      ref={forwardRef}
      className={`h-10 font-light text-xl text-blue bg-cream shadow-inner shadow-slate-400 rounded-full border-gray-300 placeholder-blue block pl-[17px] py-2.5${
        className ? " " + className : ""
      }`}
      placeholder={placeholder}
      {...rest} // Esto permite que `register` y otros props pasen al input
    />
  );
};

export default Input;
