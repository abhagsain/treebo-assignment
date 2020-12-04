import React from "react";

const CardMedia = ({ src, title, className }) => {
  return <img src={src} alt={title} className={className} srcSet={src} />;
};
export default CardMedia;
