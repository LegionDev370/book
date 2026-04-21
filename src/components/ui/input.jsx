import React from "react";

const Input = ({ type, name, placeholder, form }) => {
  return (
    <input
      {...form.register(name)}
      placeholder={placeholder}
      className="w-full p-[13px_0px_10px_29px] focus:outline-none rounded-[10px] border border-[#B4B4BB]"
      type={type}
    />
  );
};

export default Input;
