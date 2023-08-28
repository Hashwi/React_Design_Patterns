import React from "react";

export const Button = ({ size, color, text, ...props }) => {
  return (
    <button
      style={{
        padding: size === "large" ? "32px" : "8px",
        fontSize: size === "large" ? "32px" : "8px",
      }} {...props}>
      {text}
    </button>
  );
};
