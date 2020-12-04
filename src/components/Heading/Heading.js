import React from "react";
import cx from "classnames";
export default function Heading({ className, variant, children }) {
  const fonts = {
    xs: "text-xs",
    sm: "text-sm",
    base: "text-base",
    lg: "text-lg",
    xl: "text-xl",
    "2xl": "text-2xl",
  };
  return <h2 className={cx(className, fonts[variant])}>{children}</h2>;
}
