import React from "react";
import "./button.css";
import cx from "classnames";
export default function Button({ onClick, children, className }) {
  return (
    <button className={cx("button", className)} onClick={onClick}>
      {children}
    </button>
  );
}
