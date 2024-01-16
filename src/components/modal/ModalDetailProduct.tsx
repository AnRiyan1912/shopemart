import React from "react";
import { Dialog, DialogHeader, DialogBody, Button } from "@material-tailwind/react";
import { PiStarThin } from "react-icons/pi";
import { Product } from "../../models/ProductModels";
import { useDispatch } from "react-redux";
import { addChart } from "../../redux/ecommerce/productSlice";

interface ModalDetailProductProps {
  openModalDetailProduct: boolean;
  setOpenModalDetailProduct: (value: boolean) => void;
  detailProduct: Product;
}

export const ModalDetailProduct: React.FC<ModalDetailProductProps> = ({
  openModalDetailProduct,
  setOpenModalDetailProduct,
  detailProduct,
}) => {
  const dispacth = useDispatch()
  return (
    <>
      <Dialog
        open={openModalDetailProduct}
        size={"xxl"}
        handler={() => {}}
        placeholder={""}
      >
        <div className="flex justify-center items-center">
          <div className="w-2/3 ">
            <DialogHeader placeholder={""}>Detail Product</DialogHeader>
            <DialogBody placeholder={""}>
              <div className="flex justify-between gap-10">
                <div className=" rounded overflow-hidden">
                  <img
                    className=" h-72 w-96 bg-cover"
                    src={detailProduct.imageUrl}
                    alt={detailProduct.productName}
                  />
                  <div className="flex items-center gap-4 mt-20">
                    <img
                      src={detailProduct.store.image}
                      alt={detailProduct.store.storeName}
                      className="w-12 h-12 rounded-full"
                    />
                    <h6 className="text-black font-normal text-lg">
                      {detailProduct.store.storeName}
                      <p className="text-black text-sm">
                        No hp: {detailProduct.store.phone}
                      </p>
                      <p className="text-black text-sm">
                        Address: {detailProduct.store.address}
                      </p>
                    </h6>
                  </div>
                </div>
                <div className="w-1/2">
                  <div>
                    <h3 className="text-black text-2xl font-bold">
                      {detailProduct.productName}
                    </h3>
                    <div>
                      <p>{detailProduct.description}</p>
                      <div className="flex mt-6 ">
                        {" "}
                        <span className="border-b-2 border-black mr-3">
                          4.9
                        </span>
                        <PiStarThin className="w-5 h-5 " />
                        <PiStarThin className="w-5 h-5" />
                        <PiStarThin className="w-5 h-5" />
                        <PiStarThin className="w-5 h-5" />
                        <PiStarThin className="w-5 h-5" />
                        <div className="ml-6">
                          <h6 className="text-black">
                            Rp.{detailProduct.price}
                          </h6>
                        </div>
                      </div>
                      <div className="mt-4">
                        <span>Stock: {detailProduct.stock}</span>
                      </div>
                      <div className="flex gap-5 mt-14">
                        <button
                          className="p-4 rounded-md bg-blue-200 text-white"
                          onClick={() => {
                            dispacth(addChart(detailProduct));
                            setOpenModalDetailProduct(false);
                          }}
                        >
                          Masukkan Keranjang
                        </button>
                        <button className="p-4  rounded-md bg-blue-500  text-white">
                          Beli Sekarang
                        </button>
                      </div>
                      <div className="mt-10">
                        <button
                          onClick={() => setOpenModalDetailProduct(false)}
                        >
                          Back
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </DialogBody>
          </div>
        </div>
      </Dialog>
    </>
  );
};
