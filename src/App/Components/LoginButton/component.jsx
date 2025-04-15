import React from "react";

const LoginButton = ({
  title,
  onClick,
  className = "",
  textClassName = "",
}) => {
  return (
    <button
      onClick={onClick}
      className={`flex px-5 py-0 rounded-[30px] justify-center items-center  ${className}`}
    >
      <span className={`${textClassName}`}>{title}</span>
    </button>
  );
};

export default LoginButton;
