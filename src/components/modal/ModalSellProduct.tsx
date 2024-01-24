import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import React from "react";

interface ModalSellProductProps {
  openModalSell: boolean;
  setOpenModalSell: (value: boolean) => {};
}

export const ModalSellProduct: React.FC<ModalSellProductProps> = ({
  openModalSell,
  setOpenModalSell,
}) => {
  return (
    <>
      <Dialog
        size="xxl"
        placeholder={""}
        handler={() => {}}
        open={openModalSell}
      >
        <DialogHeader placeholder={""}>Its a simple dialog.</DialogHeader>
        <DialogBody placeholder={""}>
          <form action="">
            <label htmlFor=""></label>
            <input type="text" />
            <label htmlFor=""></label>
            <input type="text" />
            <label htmlFor=""></label>
            <input type="text" />
            <label htmlFor=""></label>
            <input type="text" />
            <label htmlFor=""></label>
            <input type="text" />
          </form>
        </DialogBody>
        <DialogFooter placeholder={""}>
          <Button
            placeholder={""}
            variant="text"
            color="red"
            onClick={() => setOpenModalSell(false)}
            className="mr-1"
          >
            <span>Cancel</span>
          </Button>
          <Button variant="gradient" color="green" placeholder={""}>
            <span>Save</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
};
