import React from "react";
import {
  Button,
  Dialog,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Checkbox,
} from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";
import { IoClose } from "react-icons/io5";

interface ModalChartProps {
  openModalLogin: boolean;
  setOpenModalLogin: (value: boolean) => void;
}

export const ModalRedirectLogin: React.FC<ModalChartProps> = ({
  openModalLogin,
  setOpenModalLogin,
}) => {
  const nav = useNavigate();
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
            <Typography variant="h4" color="blue-gray" placeholder={""}>
              Sign In
            </Typography>
            <Typography
              placeholder={""}
              className="mb-3 font-normal"
              variant="paragraph"
              color="gray"
            >
              You have account? click sign in
            </Typography>
          </CardBody>
          <CardFooter className="pt-0" placeholder={""}>
            <Button
              variant="gradient"
              onClick={() => nav("/login")}
              fullWidth
              placeholder={""}
            >
              Sign In
            </Button>
            <Typography
              variant="small"
              className="mt-4 flex justify-center"
              placeholder={""}
            >
              Don&apos;t have an account?
              <Typography
                placeholder={""}
                as="a"
                href="#signup"
                variant="small"
                color="blue-gray"
                className="ml-1 font-bold"
                onClick={() => nav("/login")}
              >
                Sign up
              </Typography>
            </Typography>
          </CardFooter>
        </Card>
      </Dialog>
    </>
  );
};
