import { FaAngleRight } from "react-icons/fa6";
import { ProductCard } from "../cards/ProductCard";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { Product } from "../../models/ProductModels";

interface ProductListProps {
  setOpenModalDetailProduct: (value: boolean) => void;
  setDetailProduct: (value: Product) => void
}

export const ProductList: React.FC<ProductListProps> = ({
  setOpenModalDetailProduct,
  setDetailProduct,
}) => {
  const products = useSelector((state: RootState) => state.products.products);

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
