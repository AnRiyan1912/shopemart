import React from "react"
import { ProductTopBrand } from "../cards/ProductTopBrand"

export const ProductTopBrandList:React.FC = () => {
    const arr = [1, 2, 3]
    return (
      <>
        <div className="mt-4">
          <div className="flex">
            <span className=" border-b-2 text-lg font-normal  border-blue-300">
              Top brands
            </span>
          </div>
          <div className="grid grid-cols-3 mt-5">
            {arr.map((value, index) => {
              return (
                <>
                  <ProductTopBrand key={index} />
                </>
              );
            })}
          </div>
          <div className="flex gap-4 justify-center mt-10">
            <div className="rounded-2xl w-4 h-2 bg-blue-gray-300"></div>
            <div className="rounded-2xl w-4 h-2 bg-blue-gray-300"></div>
            <div className="rounded-2xl w-4 h-2 bg-blue-gray-300"></div>
          </div>
        </div>
      </>
    );
}