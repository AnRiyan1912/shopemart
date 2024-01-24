import React from "react";
import {
  Button,
  Dialog,
  Card,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";
import { IoClose } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import defaultImgProfile from "../../assets/default-image.jpg";
import { logout } from "../../redux/slices/authSlice";

interface ModalChartProps {
  openModalLogin: boolean;
  setOpenModalLogin: (value: boolean) => void;
}

export const ModalRedirectLogin: React.FC<ModalChartProps> = ({
  openModalLogin,
  setOpenModalLogin,
}) => {
  const nav = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.auth.customer);
  const handleLogout = () => {
    dispatch(logout());
    localStorage.removeItem("auth");
    nav("/login");
  };
  return (
    <>
      <Dialog
        placeholder={""}
        size="xs"
        open={openModalLogin}
        handler={() => {}}
        className="bg-transparent shadow-none"
      >
        <Card className="mx-auto w-full max-w-[24rem]" placeholder={""}>
          <div className="flex justify-end p-4">
            <span>
              <button onClick={() => setOpenModalLogin(false)}>
                <IoClose className="w-8 h-8" />
              </button>
            </span>
          </div>
          <CardBody className="flex flex-col gap-4" placeholder={""}>
            <div className="flex justify-center">
              <img
                className="w-20 h-20 rounded-full"
                src={defaultImgProfile}
                alt=""
              />
            </div>
            <div>
              <Typography
                variant="h4"
                color="blue-gray"
                placeholder={""}
                className="flex justify-center"
              >
                {user.customerName ? user.customerName : "SignIn"}
              </Typography>
              <div className="px-14">
                <h6>{user.email ? user.email : ""}</h6>
              </div>
            </div>

            <Typography
              placeholder={""}
              className="mb-3 font-normal"
              variant="paragraph"
              color="gray"
            >
              {user.customerName ? "" : "You have account? click sign in"}
            </Typography>
            <div>
              {user.customerName ? (
                <button
                  className="bg-blue-300 text-white px-4 py-1 rounded-lg"
                  onClick={() => nav("/profile")}
                >
                  See profile
                </button>
              ) : (
                ""
              )}
            </div>
          </CardBody>
          <CardFooter className="pt-0" placeholder={""}>
            <Button
              variant="gradient"
              color="blue"
              onClick={() => {
                handleLogout();
              }}
              fullWidth
              placeholder={""}
            >
              {user.customerName ? "Logout" : " Sign In"}
            </Button>
            <Typography
              variant="small"
              className="mt-4 flex justify-center"
              placeholder={""}
            >
              {user.customerName ? "" : " Don&apos;t have an account?"}

              <Typography
                placeholder={""}
                as="a"
                href=""
                variant="small"
                color="blue-gray"
                className="ml-1 font-bold"
                onClick={() => nav("/register/customer")}
              >
                {user.customerName ? "" : " Sign up customer"}
              </Typography>
            </Typography>
            <div className="flex justify-end px-5">
              <Typography
                placeholder={""}
                as="a"
                href=""
                variant="small"
                color="blue-gray"
                className="ml-1 font-bold"
                onClick={() => nav("/register/admin")}
              >
                {user.customerName ? "" : " Sign up admin"}
              </Typography>
            </div>
          </CardFooter>
        </Card>
      </Dialog>
    </>
  );
};
