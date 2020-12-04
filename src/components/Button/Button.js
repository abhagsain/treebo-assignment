import React from "react";

export default function Button({ onClick, children }) {
  return (
    <button className="w-full cursor-pointer button" onClick={onClick}>
      {children}
    </button>
  );
}
