export interface AuthCustomer {
  username: string;
  password: string;
}

export interface AuthRegister {
  username: string;
  password: string;
  customerName: string;
  address: string;
  mobilePhone: string;
  email: string;
}
