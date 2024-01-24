import { useFormik } from "formik";
import bgEcommerce from "../assets/e-commerce.jpg";
import { useNavigate } from "react-router-dom";
import { AuthRegister } from "../models/AuthModels";
import { registerCustomer } from "../services/AuthService";
import { ToastContainer, toast } from "react-toastify";

export const RegisterCustomerPage = () => {
  const nav = useNavigate();
  const validate = (values: AuthRegister) => {
    const errors: any = {};

    if (!values.username) {
      errors.username = "Username is required";
    }
    if (!values.customerName) {
      errors.customerName = "Name is required";
    }
    if (!values.password) {
      errors.password = "Password is required";
    }
    if (values.password.length < 8) {
      errors.password = "Password must be 8 character";
    }
    if (!values.email) {
      errors.email = "Email is required";
    }
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = "Invalid email address";
    }
    if (!values.mobilePhone) {
      errors.mobilePhone = "Phone number is required";
    }
    if (!values.address) {
      errors.address = "Address is required";
    }
    return errors;
  };

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
      customerName: "",
      address: "",
      mobilePhone: "",
      email: "",
    },
    validate,
    onSubmit: async (values) => {
      const statusReponse = await registerCustomer(values);
      if (statusReponse == 201) {
        toast.success("Success register customer", { position: "top-center" });
        formik.resetForm({
          username: "",
          password: "",
          customerName: "",
          address: "",
          mobilePhone: "",
          email: "",
        });
      } else {
        toast.error("Failed customer already exist");
      }
    },
  });

  return (
    <>
      <ToastContainer />
      <section className="h-screen">
        <div className="h-full">
          {/* <!-- Left column container with background--> */}
          <div className="g-6 flex h-full flex-wrap items-center justify-center lg:justify-between">
            <div className="shrink-1 mb-12 grow-0 basis-auto md:mb-0 md:w-9/12 md:shrink-0 lg:w-6/12 xl:w-6/12">
              <img
                src={bgEcommerce}
                className="w-full rounded-md"
                alt="Sample image"
              />
            </div>

            {/* <!-- Right column container --> */}
            <div className="mb-12 md:mb-0 md:w-8/12 lg:w-5/12 xl:w-5/12">
              <div className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
                <p className="mx-4 mb-0 text-center font-semibold dark:text-white">
                  Welcome customer
                </p>
              </div>
              <form onSubmit={formik.handleSubmit}>
                {/* <!-- Email input --> */}
                <div
                  className="relative mb-6 border-black border-b"
                  data-te-input-wrapper-init
                >
                  <input
                    type="text"
                    className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                    placeholder="Username"
                    id="username"
                    onChange={formik.handleChange}
                    value={formik.values.username}
                  />
                  <label
                    htmlFor="username"
                    className=" pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                  >
                    Username
                  </label>
                </div>
                {formik.errors.username ? (
                  <div className="text-red-600 text-xs">
                    {formik.errors.username}
                  </div>
                ) : null}

                {/* <!-- Password input --> */}
                <div
                  className="relative mb-6 border-black border-b"
                  data-te-input-wrapper-init
                >
                  <input
                    type="password"
                    className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                    placeholder="Password"
                    onChange={formik.handleChange}
                    value={formik.values.password}
                    id="password"
                  />
                  <label
                    htmlFor="password"
                    className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                  >
                    Password
                  </label>
                </div>
                {formik.errors.password ? (
                  <div className="text-red-600 text-xs">
                    {formik.errors.password}
                  </div>
                ) : (
                  ""
                )}
                <div
                  className="relative mb-6 border-black border-b"
                  data-te-input-wrapper-init
                >
                  <input
                    type="text"
                    className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                    placeholder="Your name"
                    onChange={formik.handleChange}
                    value={formik.values.customerName}
                    id="customerName"
                  />
                  <label
                    htmlFor="customerName"
                    className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                  >
                    Your name
                  </label>
                </div>
                {formik.errors.customerName ? (
                  <div className="text-red-600 text-xs">
                    {formik.errors.customerName}
                  </div>
                ) : (
                  ""
                )}
                <div
                  className="relative mb-6 border-black border-b"
                  data-te-input-wrapper-init
                >
                  <input
                    type="text"
                    className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                    placeholder="Email"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                    id="email"
                  />
                  <label
                    htmlFor="email"
                    className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                  >
                    Email
                  </label>
                </div>
                {formik.errors.email ? (
                  <div className="text-red-600 text-xs">
                    {formik.errors.email}
                  </div>
                ) : (
                  ""
                )}
                <div
                  className="relative mb-6 border-black border-b"
                  data-te-input-wrapper-init
                >
                  <input
                    type="text"
                    className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                    placeholder="Phone number"
                    onChange={formik.handleChange}
                    value={formik.values.mobilePhone}
                    id="mobilePhone"
                  />
                  <label
                    htmlFor="mobilePhone"
                    className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                  >
                    Phone number
                  </label>
                </div>
                {formik.errors.mobilePhone ? (
                  <div className="text-red-600 text-xs">
                    {formik.errors.mobilePhone}
                  </div>
                ) : (
                  ""
                )}
                <div
                  className="relative mb-6 border-black border-b"
                  data-te-input-wrapper-init
                >
                  <input
                    type="text"
                    className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                    placeholder="Address"
                    onChange={formik.handleChange}
                    value={formik.values.address}
                    id="address"
                  />
                  <label
                    htmlFor="address"
                    className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                  >
                    Address
                  </label>
                </div>
                {formik.errors.address ? (
                  <div className="text-red-600 text-xs">
                    {formik.errors.address}
                  </div>
                ) : (
                  ""
                )}

                {/* <!-- Login button --> */}
                <div className="text-center lg:text-left">
                  <button
                    type="submit"
                    className="inline-block rounded bg-primary px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                  >
                    Login
                  </button>
                </div>
                <p className="mb-0 mt-2 pt-1 text-sm font-semibold ">
                  Have an account?
                  <a
                    onClick={() => nav("/login")}
                    className="text-danger transition cursor-pointer duration-150 ease-in-out hover:text-danger-600 focus:text-danger-600 active:text-danger-700"
                  >
                    SignIn
                  </a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
