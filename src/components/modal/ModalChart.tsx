import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import { IoMdAdd } from "react-icons/io";
import { FiMinus } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import {
  addTotalProductInCart,
  minusTotalProductInCard,
  removeProductInChart,
} from "../../redux/slices/productSlice";

interface ModalChartProps {
  openModalChart: boolean;
  setModalChart: (value: boolean) => void;
}

export const ModalChart: React.FC<ModalChartProps> = ({
  openModalChart,
  setModalChart,
}) => {
  const charts = useSelector((state: RootState) => state.products.chart);
  const totalPrice = useSelector((state: RootState) => state.products.total);
  const dispatch = useDispatch();
  return (
    <>
      <Dialog
        open={openModalChart}
        size={"xxl"}
        handler={() => {}}
        placeholder={""}
      >
        <div className="flex justify-center items-center">
          <div className="w-2/3 ">
            <DialogHeader placeholder={""}>Keranjang Belanja</DialogHeader>
            <DialogBody placeholder={""}>
              {charts?.map((product, index) => {
                return (
                  <div
                    className="flex justify-between items-center mt-6"
                    key={index}
                  >
                    <div>
                      <img
                        src={product.product.imageUrl}
                        alt=""
                        className="w-40 rounded-md"
                      />
                    </div>
                    <div>
                      <span className=" text-black">
                        {product.product.productName}
                      </span>
                    </div>
                    <div className="flex items-center gap-5">
                      <span className="flex items-center">
                        <button
                          className="text-black"
                          onClick={() =>
                            dispatch(minusTotalProductInCard(product.product))
                          }
                        >
                          <FiMinus />
                        </button>
                      </span>
                      <span className="flex items-center text-black">
                        {product.totalProduct}
                      </span>
                      <span className="flex items-center">
                        <button
                          className="text-black"
                          onClick={() =>
                            dispatch(addTotalProductInCart(product.product))
                          }
                        >
                          <IoMdAdd />
                        </button>
                      </span>
                    </div>
                    <div>
                      <span className=" text-black">Rp. {product.amount}</span>
                    </div>
                    <div>
                      <button
                        className="px-2 py-1 bg-red-600 text-white hover:bg-red-400"
                        onClick={() =>
                          dispatch(removeProductInChart(product.product))
                        }
                      >
                        delete
                      </button>
                    </div>
                  </div>
                );
              })}
            </DialogBody>
            <DialogFooter placeholder={""}>
              <div>
                <div>
                  <div className="flex justify-between">
                    <h3>Biaya Pengiriman: </h3>
                    <h6>Rp.15.000</h6>
                  </div>
                  <div className="flex justify-between mt-5">
                    <h3>Total: Rp.{totalPrice}</h3>
                  </div>
                </div>
                <div className="mt-10">
                  {" "}
                  <Button
                    placeholder={""}
                    variant="text"
                    color="red"
                    className="mr-1 "
                    onClick={() => setModalChart(false)}
                  >
                    <span>Cancel</span>
                  </Button>
                  <Button placeholder={""} variant="gradient" color="green">
                    <span>Confirm</span>
                  </Button>
                </div>
              </div>
            </DialogFooter>
          </div>
        </div>
      </Dialog>
    </>
  );
};
