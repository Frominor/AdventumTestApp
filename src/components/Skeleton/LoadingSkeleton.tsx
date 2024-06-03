import React from "react";
import "./LoadingSkeleton.css";
export const LoadingSkeleton: React.FC = ({}) => {
  return (
    <div className="LoadingSkeleton">
      <h2
        className="SkeletonText skeleton"
        style={{ width: 170, height: 26 }}
      ></h2>
      <div className="Skeleton_main">
        <div
          className="SkeletonImg skeleton"
          style={{ width: 100, height: 75 }}
        ></div>
        <div>
          <p
            className="SkeletonDescription skeleton"
            style={{ width: 210, height: 110 }}
          ></p>
          <p
            className="SkeletonText skeleton"
            style={{ width: 150, height: 17 }}
          ></p>
        </div>
      </div>
    </div>
  );
};
