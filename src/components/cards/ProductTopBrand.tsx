import React from "react";
import ImageBannerTop from "../../assets/banner-3.jpg";

export const ProductTopBrand: React.FC = () => {
  return (
    <>
      <div
        className="w-96 h-56 rounded-2xl overflow-hidden shadow-md"
        style={{ boxShadow: "1px 2px 5px black" }}
      
      >
        <img
          src={ImageBannerTop}
          alt=""
          className="w-full h-full object-cover"
        />
      </div>
    </>
  );
};
