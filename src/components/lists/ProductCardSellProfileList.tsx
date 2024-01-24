import { ProductCardSellProfile } from "../cards/ProductCardSellProfile";

export const ProductCardSellProfileList = () => {
  const data = [1, 2, 3, 4, 5, 6];
  return (
    <>
      <div className="grid grid-cols-4 gap-4">
        {data.map((value, index) => {
          return (
            <>
              <ProductCardSellProfile key={index} />
            </>
          );
        })}
      </div>
    </>
  );
};
