import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Sidenav, initTE } from "tw-elements";
import { RootState } from "../../redux/store";
import { jwtDecode } from "jwt-decode";
import {
  getUserAdminById,
  getUserCustomerById,
} from "../../redux/slices/authSlice";
initTE({ Sidenav });

interface SideBarProps {
  children?: React.ReactNode;
}
export const SideBar: React.FC<SideBarProps> = ({ children }) => {
  const nav = useNavigate();
  const user = useSelector((state: RootState) => state.auth.customer);

  const token = localStorage.getItem("auth");
  const dispatch = useDispatch();
  let tokenData = "";
  useEffect(() => {
    if (token) tokenData = jwtDecode(token);
    if (tokenData.role == "ROLE_ADMIN") {
      dispatch(getUserAdminById(tokenData.userId));
    }
    if (tokenData.role == "ROLE_CUSTOMER") {
      dispatch(getUserCustomerById(tokenData.userId));
    }
  }, []);

  return (
    <>
      <div>
        <nav
          id="sidenav-1"
          className="fixed left-0 top-0 z-[1035] h-full w-60 -translate-x-full overflow-hidden bg-blue-400 shadow-[0_4px_12px_0_rgba(0,0,0,0.07),_0_2px_4px_rgba(0,0,0,0.05)] data-[te-sidenav-hidden='false']:translate-x-0 dark:bg-zinc-800"
          data-te-sidenav-init
          data-te-sidenav-hidden="false"
          data-te-sidenav-position="absolute"
        >
          <div className="border-b-2 border-blue-500">
            <h5 className="p-4 font-bold text-white">Dashboard</h5>
          </div>
          <ul className="mt-10">
            <li
              className="hover:bg-blue-200 hover:cursor-pointer p-5 bg-blue-300 mt-4 rounded-lg text-white"
              onClick={() => nav(`/profile/${user.id}`)}
            >
              <h6>Profile</h6>
            </li>
            <li
              className="hover:bg-blue-200 hover:cursor-pointer p-5 bg-blue-300 mt-4 rounded-lg text-white"
              onClick={() => nav("/profile/store")}
            >
              <h6>Store</h6>
            </li>
            <li
              className="hover:bg-blue-200 hover:cursor-pointer p-5 bg-blue-300 mt-4 rounded-lg text-white"
              onClick={() => nav("/profile/products")}
            >
              <h6>Products</h6>
            </li>
          </ul>
        </nav>
        <div>{children}</div>
      </div>
    </>
  );
};
