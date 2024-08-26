import React, { forwardRef } from "react";

const Input = forwardRef(({ type = "text", id, className, placeholder, ...rest }, ref) => {
  return (
    <input
      type={type}
      id={id}
      ref={forwardRef}
      className={`h-10 font-light text-xl text-blue bg-cream shadow-inner shadow-slate-400 rounded-full border-gray-300 placeholder-blue block pl-[17px] py-2.5${
        className ? " " + className : ""
      }`}
      placeholder={placeholder}
      {...rest}
    />
  );
});

export default Input;
