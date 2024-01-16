import React from "react";
import productImage from "../../assets/jam-tangan.jpeg";
import { Product } from "../../models/ProductModels";

interface ProductCardProps {
  setOpenModalDetailProduct: (value: boolean) => void;
  product: Product;
  setDetailProduct: (value: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  setOpenModalDetailProduct,
  product,
  setDetailProduct,
}) => {
  return (
    <>
      <div
        className="max-w-sm rounded overflow-hidden shadow-lg cursor-pointer"
        onClick={() => {
          setOpenModalDetailProduct(true), setDetailProduct(product);
        }}
      >
        <div>
          <img
            className="w-full h-36 bg-cover"
            src={product.imageUrl}
            alt="Sunset in the mountains"
          />

          <div>
            <img src="" alt="" className="w-2" />
          </div>
        </div>

        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{product.productName}</div>
          <p className="text-gray-700 text-base">Rp.{product.price}</p>
        </div>
        <div className="px-6 pt-4 pb-2 justify-between">
          <h6 className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 hover:bg-blue-200  cursor-pointer">
            Buy
          </h6>

          <h6 className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2  hover:bg-blue-200  cursor-pointer">
            Detail
          </h6>
        </div>
      </div>
    </>
  );
};
