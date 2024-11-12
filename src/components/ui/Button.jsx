import React from "react";

export default function Button({
  borderColor,
  BackgroundColor = "transparent",
  text,
  onClick,
}) {
  return (
    <button
      onClick={onClick}
      className={`border ${borderColor} ${BackgroundColor} px-5 py-3 rounded-3xl text-textColor dark:text-darkText font-monserrat cursor-pointer`}
    >
      {text}
    </button>
  );
}
