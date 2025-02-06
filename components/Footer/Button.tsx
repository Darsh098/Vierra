import React from "react";

interface ButtonProps {
  text: string;
  additionalClasses: string;
}

const Button: React.FC<ButtonProps> = ({ text, additionalClasses }) => (
  <button
    className={`px-8 py-6 text-sm font-light tracking-wide border-2 border-white border-solid cursor-pointer rounded-[70px] max-sm:w-full max-sm:text-center ${additionalClasses}`}
  >
    {text}
  </button>
);

export default Button;
