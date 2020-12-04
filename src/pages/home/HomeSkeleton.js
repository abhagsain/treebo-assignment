import React from "react";

const Skeleton = () => (
  <div>
    <div className="shine skeleton-image"></div>
    <div className="shine lines"></div>
  </div>
);
function HomeSkeleton() {
  return (
    <div className="card-list">
      <Skeleton />
      <Skeleton />
      <Skeleton />
      <Skeleton />
      <Skeleton />
      <Skeleton />
    </div>
  );
}
export default HomeSkeleton;
