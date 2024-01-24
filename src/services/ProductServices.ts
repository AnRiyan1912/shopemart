import { api } from "../api/axios";

export const getAllProductPaging = async (
  name: string,
  maxPrice: number,
  page: number,
  size: number
) => {
  try {
    const response = await api.get("/product", {
      params: { name: name, maxPrice: maxPrice, page: page, size: size },
    });
    return response.data;
  } catch (err) {
    console.log(err + "in product service");
  }
};
