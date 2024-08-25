/* import React from "react";

const Input = ({ value, onChange, type = "text", name, id, className, placeholder, required }) => {
  return (
    <input
      value={value}
      onChange={onChange}
      type={type}
      name={name}
      id={id}
      className={`h-10 font-light text-xl text-blue bg-cream shadow-inner shadow-slate-400 rounded-full border-gray-300 placeholder-blue block pl-[17px] py-2.5${
        className ? " " + className : ""
      }`}
      placeholder={placeholder}
      required
    />
  );
};

export default Input; */
import React from "react";

const Input = ({ type = "text", id, className, placeholder, ...rest }) => {
  return (
    <input
      type={type}
      id={id}
      className={`h-10 font-light text-xl text-blue bg-cream shadow-inner shadow-slate-400 rounded-full border-gray-300 placeholder-blue block pl-[17px] py-2.5${
        className ? " " + className : ""
      }`}
      placeholder={placeholder}
      {...rest} // Esto permite que `register` y otros props pasen al input
    />
  );
};

export default Input;
