import React from "react";

const Skeleton = () => (
  <div>
    <div className="mb-2 shine" style={{ width: "60%", height: "40px" }}></div>
  </div>
);
function DetailSkeleton() {
  return (
    <>
      <Skeleton />
      <div>
        <div
          className="mb-2 shine"
          style={{ width: "50%", height: "40px" }}
        ></div>
      </div>
    </>
  );
}
export default DetailSkeleton;
