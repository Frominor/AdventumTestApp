import React from "react";
import "./LoadingSkeleton.css";
interface LoadingSkeletonProps {
  Rows: number;
  BlocksWidthAndHeight: { width: number; height: number }[];
}
export const LoadingSkeleton: React.FC<LoadingSkeletonProps> = ({
  Rows,
  BlocksWidthAndHeight,
}) => {
  const ArrForRenderSkeletonRows = Array(Rows).fill(0);
  return (
    <div className="LoadingSkeleton">
      {ArrForRenderSkeletonRows.map((item, index) => {
        return (
          <>
            <h2
              className="SkeletonText skeleton"
              style={{
                width: BlocksWidthAndHeight[index].width + "px",
                height: BlocksWidthAndHeight[index].height + "px",
              }}
            ></h2>
            <div className="Skeleton_main">
              <div
                className="SkeletonImg skeleton"
                style={{
                  width: BlocksWidthAndHeight[index + 1].width + "px",
                  height: BlocksWidthAndHeight[index + 1].height + "px",
                }}
              ></div>
              <div>
                <p
                  className="SkeletonDescription skeleton"
                  style={{
                    width: BlocksWidthAndHeight[index + 2].width + "px",
                    height: BlocksWidthAndHeight[index + 2].height + "px",
                  }}
                ></p>
                <p
                  className="SkeletonText skeleton"
                  style={{
                    width: BlocksWidthAndHeight[index + 3].width + "px",
                    height: BlocksWidthAndHeight[index + 3].height + "px",
                  }}
                ></p>
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
};
