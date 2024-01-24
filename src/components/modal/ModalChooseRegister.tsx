import { Button, Dialog, Card, CardFooter } from "@material-tailwind/react";
import { IoClose } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

interface ModalChooseRegisterProps {
  openModalChoose: boolean;
  setOpenModalChoose: (value: boolean) => void;
}

export const ModalChooseRegister: React.FC<ModalChooseRegisterProps> = ({
  openModalChoose,
  setOpenModalChoose,
}) => {
  const nav = useNavigate();
  return (
    <>
      <Dialog
        placeholder={""}
        size="xs"
        open={openModalChoose}
        handler={() => {}}
        className="bg-transparent shadow-none"
      >
        <Card className="mx-auto w-full max-w-[24rem]" placeholder={""}>
          <div className="flex justify-end p-4">
            <span>
              <button onClick={() => setOpenModalChoose(false)}>
                <IoClose className="w-8 h-8" />
              </button>
            </span>
          </div>

          <CardFooter className="pt-0" placeholder={""}>
            <Button
              color="blue"
              variant="gradient"
              onClick={() => {
                nav("/register/admin"), localStorage.removeItem("auth");
              }}
              fullWidth
              placeholder={""}
            >
              Register seller
            </Button>
            <Button
              color="blue"
              className="mt-2"
              variant="gradient"
              onClick={() => {
                nav("/register/customer"), localStorage.removeItem("auth");
              }}
              fullWidth
              placeholder={""}
            >
              Register customer
            </Button>
          </CardFooter>
        </Card>
      </Dialog>
    </>
  );
};
