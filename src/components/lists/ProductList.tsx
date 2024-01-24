import { FaAngleRight } from "react-icons/fa6";
import { ProductCard } from "../cards/ProductCard";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { Product } from "../../models/ProductModels";
import { useEffect, useState } from "react";
import { getAllProductPaging } from "../../services/ProductServices";
import { addProducst } from "../../redux/slices/productSlice";

interface ProductListProps {
  setOpenModalDetailProduct: (value: boolean) => void;
  setDetailProduct: (value: Product) => void;
}

export const ProductList: React.FC<ProductListProps> = ({
  setOpenModalDetailProduct,
  setDetailProduct,
}) => {
  const [nameParam, setNameParam] = useState("");
  const [maxPriceParam, setMaxPriceParam] = useState(0);
  const [pageParam, setPageParam] = useState(0);
  const [sizeParam, setSizeParam] = useState(5);

  const products = useSelector((state: RootState) => state.products.products);

  const fetchProduct = async () => {
    const product = await getAllProductPaging(
      nameParam,
      maxPriceParam,
      pageParam,
      sizeParam
    );
  };
  useEffect(() => {
    fetchProduct();
  }, []);
  return (
    <>
      <div className="flex justify-between">
        <div>
          <span className="text-lg font-normal border-b-2 border-blue-300">
            Get your product here
          </span>
        </div>
        <button>
          <h6 className="text-lg font-semibold flex items-center">
            View all <FaAngleRight className="text-blue-400" />
          </h6>
        </button>
      </div>
      <div className="grid grid-cols-5 gap-5 mt-5">
        {products.map((product, index) => {
          return (
            <ProductCard
              product={product}
              setDetailProduct={setDetailProduct}
              key={index}
              setOpenModalDetailProduct={setOpenModalDetailProduct}
            />
          );
        })}
      </div>
    </>
  );
};
