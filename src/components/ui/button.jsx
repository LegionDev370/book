import React from "react";

const Button = ({ children, className }) => {
  return (
    <button
      className={`bg-[#152540] cursor-pointer hover:opacity-70 py-2.5 rounded-[99px] font-medium text-[18px] text-white ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
