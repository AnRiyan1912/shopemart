import React from "react";
import jamCategory from "../../assets/jam-tangan.jpeg";

export const ProductCategoryCard: React.FC = () => {
  return (
    <>
      <div className="">
        <div className="flex justify-center items-center">
          <img
            src={jamCategory}
            alt="jam-category"
            className="w-36 h-36 rounded-full bg-cover"
          />
        </div>
        <h6 className="">Jam</h6>
      </div>
    </>
  );
};
