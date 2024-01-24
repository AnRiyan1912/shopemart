import { api } from "../api/axios";
import { AuthRegister } from "../models/AuthModels";

export const registerAdmin = async (value: AuthRegister) => {
  try {
    const response = await api.post("/auth/register/admin", value);
    return response.status;
  } catch (err) {
    console.log(err);
  }
};

export const registerCustomer = async (value: AuthRegister) => {
  try {
    const reponse = await api.post("/auth/register/customer", value);
    return reponse.status;
  } catch (err) {
    console.log(err);
  }
};
