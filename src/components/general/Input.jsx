import React from "react";

const Input = ({ value, type = "text", required, id, name, placeholder, className }) => {
  return (
    <input
      value={value}
      type={type}
      name={name}
      id={id}
      className={`h-10 font-light text-xl text-blue bg-cream shadow-inner shadow-slate-400 rounded-full border-gray-300 placeholder-blue block p-2.5${
        className ? " " + className : ""
      }`}
      placeholder={placeholder}
      required={required}
    />
  );
};

export default Input;
