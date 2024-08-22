import React from "react";

const Input = ({ text, placeholder }) => {
  return (
    <input
      type={text}
      name={text}
      id={text}
      className="font-jaldi bg-cream shadow-inner shadow-slate-400 h-10 w-128 rounded-full border-gray-300 text-sm placeholder-blue block w-full p-2.5 "
      placeholder={placeholder}
      required
    />
  );
};

export default Input;
