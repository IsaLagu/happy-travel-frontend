import React from "react";
const Button = ({onClick, buttonText, buttonStyle }) => {
    return (
        <button
        onClick={onClick}
        className={`${buttonStyle} w-[120px] h-[40px] text-[20px] font-bold font-jaldi text-cream rounded-full`} >{buttonText} </button>
    )
}

export default Button;