import PropTypes from "prop-types";

const Button = ({onClick, buttonText, buttonStyle }) => {
    return (
        <button
        onClick={onClick}
        className={`${buttonStyle} w-[120px] h-[40px] text-[20px] font-bold font-jaldi text-cream rounded-full`} >{buttonText} </button>
    )
}
Button.propTypes = {
    buttonText: PropTypes.string,
    buttonStyle: PropTypes.string,
    onClick: PropTypes.func.isRequired
};

export default Button;