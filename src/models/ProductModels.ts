export interface Product {
  id: string;
  productName: string;
  description: string;
  price: number;
  stock: number;
  imageUrl: string
  store: Store;

}

export interface Store {
  id: string;
  image: string;
  noSiup: string;
  storeName: string;
  address: string;
  phone: string;
  isActive: boolean;
}

export interface ProductList {
  products: Product[];
  selectedProduct?: Product;
  chart?: ProductAddCart[];
  total: number;
}
export interface ProductAddCart {
  product: Product
  totalProduct?: number;
  amount?: number
}
export interface ProductId {
  id:string
}