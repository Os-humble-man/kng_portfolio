import React from "react";

export default function Button({
  borderColor,
  BackgroundColor = "transparent",
  text,
}) {
  return (
    <button
      className={`border ${borderColor} ${BackgroundColor} px-5 py-3 rounded-3xl text-textColor dark:text-darkText font-monserrat cursor-pointer`}
    >
      {text}
    </button>
  );
}
