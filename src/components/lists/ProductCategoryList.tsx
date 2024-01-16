import React from "react";
import { ProductCategoryCard } from "../cards/ProductCategoryCard";

export const ProductCategoryList: React.FC = () => {
  const arr = [1, 2, 3, 4, 5, 6, 7];
  return (
    <>
      <div className="mt-10">
        <div className="flex">
          <span className="text-lg font-normal border-b-2 border-blue-400">
            Category of product
          </span>
        </div>
        <div className="grid grid-cols-7 mt-5">
          {arr.map((value, index) => {
            return <ProductCategoryCard key={index} />;
          })}
        </div>
      </div>
    </>
  );
};
