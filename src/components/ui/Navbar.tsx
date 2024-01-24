import React from "react";
import { CgProfile } from "react-icons/cg";
import { CiSearch } from "react-icons/ci";
import { FaCartShopping } from "react-icons/fa6";
import { VscListSelection } from "react-icons/vsc";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import { MdSell } from "react-icons/md";

interface NavbarProps {
  children?: React.ReactNode;
  setModalChart: (value: boolean) => void;
  setOpenModalLogin: (value: boolean) => void;
  setOpenModalSell: (value: boolean) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  children,
  setModalChart,
  setOpenModalLogin,
  setOpenModalSell,
}) => {
  const user = useSelector((state: RootState) => state.auth.customer);
  const nav = useNavigate();
  const token = localStorage.getItem("auth");
  let roleUser = "";
  if (token) roleUser = jwtDecode(token);

  return (
    <>
      <nav className="">
        <div className="w-full flex">
          Welcome to <span className="text-blue-400">shopemarth!</span>
        </div>
        <div className="flex justify-between w-full">
          <div className="flex items-center justify-center  gap-4">
            <div className="p-4 bg-blue-400 text-white rounded-lg">
              <VscListSelection className="w-5 h-5" />
            </div>
            <div>
              <h1 className="text-blue-400 w-400 text-2xl font-bold ">
                Shopemarth
              </h1>
            </div>
          </div>

          <div
            className="rounded-2xl flex justify-start px-2"
            style={{
              border: "1px solid black",
              boxShadow: "0px 1px 5px black",
            }}
          >
            <div className="flex items-center ">
              <CiSearch className="w-8 h-8" />
              <input
                type="text"
                className="px-28 h-full outline-none rounded-2xl"
                placeholder="Search Product"
              />
            </div>
          </div>

          <div className="flex items-center justify-center">
            <div className="flex gap-4">
              <div>
                {roleUser.role == "ROLE_ADMIN" ? (
                  <button
                    className="flex items-center"
                    onClick={() => setOpenModalSell(true)}
                  >
                    <MdSell className="w-8 h-8" />
                  </button>
                ) : (
                  ""
                )}
              </div>
              <div>
                <button
                  onClick={() => {
                    setModalChart(true), user.customerName ? "" : nav("/login");
                  }}
                >
                  <FaCartShopping className="w-8 h-8" />
                </button>
              </div>
              <div className="flex items-center gap-2">
                <button onClick={() => setOpenModalLogin(true)}>
                  <CgProfile className="w-8 h-8" />
                </button>
                {user.customerName ? <h4>{user.customerName}</h4> : ""}
              </div>
            </div>
            <div></div>
          </div>
        </div>
      </nav>
      <div>{children}</div>
    </>
  );
};
