import React from "react";

export const Loading: React.FC = ({}) => {
  return (
    <>
      <div className="fixed w-full h-full left-0 top-0 bg-black opacity-50 z-50"></div>
      <div className="fixed left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50">
        <div
          className="flex items-center h-10 w-10 animate-spin rounded-full border-4 border-solid border-current border-r-transparent"
          role="status"
        >
          <h6 className="hidden">Loading...</h6>
        </div>
      </div>
    </>
  );
};
