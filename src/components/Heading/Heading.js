import React from "react";
import "./heading.css";
import cx from "classnames";
export default function Heading({ className, children }) {
  return <h2 className={cx("heading", className)}>{children}</h2>;
}
