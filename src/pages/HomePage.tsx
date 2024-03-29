import React, { useEffect, useState } from "react";
import { Navbar } from "../components/ui/Navbar";
import { ProductList } from "../components/lists/ProductList";
import { Corousel } from "../components/corousel/Couresel";
import { ProductCategoryList } from "../components/lists/ProductCategoryList";
import { ProductTopBrandList } from "../components/lists/ProductTopBrandList";
import { ModalChart } from "../components/modal/ModalChart";
import { ModalRedirectLogin } from "../components/modal/ModalRedirectLogin";
import { ModalDetailProduct } from "../components/modal/ModalDetailProduct";
import { useDispatch } from "react-redux";
import { jwtDecode } from "jwt-decode";
import {
  getUserAdminById,
  getUserCustomerById,
} from "../redux/slices/authSlice";
import { Footer } from "../components/ui/Footer";
import { ModalSellProduct } from "../components/modal/ModalSellProduct";

export const HomePage: React.FC = () => {
  const [openModalChart, setModalChart] = useState(false);
  const [openModalLogin, setOpenModalLogin] = useState(false);
  const [openModalDetailProduct, setOpenModalDetailProduct] = useState(false);
  const [openModalSell, setOpenModalSell] = useState(false);
  const [detailProduct, setDetailProduct] = useState({
    id: "88hhbffhfj",
    productName: "Motor Jadul",
    description: "Ini motor jadul tapi mesin rasa baru",
    price: 1902323223,
    stock: 10,
    imageUrl:
      "data:image/jpeg;base64,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",
    store: {
      id: "sadasd8dasd",
      storeName: "Toko Motor Second",
      address: "jalan uhun",
      isActive: true,
      noSiup: "8uadjsajdas",
      phone: "081321313",
    },
  });
  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem("auth");
    let dataToken: String = "";
    if (token) dataToken = jwtDecode(token);
    if (dataToken.role == "ROLE_CUSTOMER") {
      dispatch(getUserCustomerById(dataToken.userId));
    }
    if (dataToken.role == "ROLE_ADMIN") {
      dispatch(getUserAdminById(dataToken.userId));
    }
  }, []);
  return (
    <>
      <Navbar
        setModalChart={setModalChart}
        setOpenModalLogin={setOpenModalLogin}
        setOpenModalSell={setOpenModalSell}
      >
        <Corousel />
        <div className="mt-16">
          <ProductList
            setOpenModalDetailProduct={setOpenModalDetailProduct}
            setDetailProduct={setDetailProduct}
          />
          <ProductCategoryList />
          <ProductTopBrandList />
        </div>
      </Navbar>
      <Footer />
      {/* modal */}
      <ModalChart
        openModalChart={openModalChart}
        setModalChart={setModalChart}
      />

      <ModalRedirectLogin
        openModalLogin={openModalLogin}
        setOpenModalLogin={setOpenModalLogin}
      />

      <ModalDetailProduct
        openModalDetailProduct={openModalDetailProduct}
        setOpenModalDetailProduct={setOpenModalDetailProduct}
        detailProduct={detailProduct}
      />
      <ModalSellProduct
        openModalSell={openModalSell}
        setOpenModalSell={setOpenModalSell}
      />
    </>
  );
};
