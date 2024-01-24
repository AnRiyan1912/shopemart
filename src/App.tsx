import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LoginPage } from "./pages/LoginPage";
import { HomePage } from "./pages/HomePage";
import { RegisterAdminPage } from "./pages/RegisterAdminPage";
import { RegisterCustomerPage } from "./pages/RegisterCustomerPage";
import { DashboardProfile } from "./pages/DashboardProfile";
import { ProductSellProfilePage } from "./pages/ProductSellProfilePage";
import { useSelector } from "react-redux";
import { RootState } from "./redux/store";
import { StoreProfilePage } from "./pages/StoreProfilePage";
import { ProfilePage } from "./pages/ProfilePage";

function App() {
  const user = useSelector((state: RootState) => state.auth.customer);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register/admin" element={<RegisterAdminPage />} />
          <Route path="/register/customer" element={<RegisterCustomerPage />} />
          <Route path="/profile" element={<DashboardProfile />} />
          <Route
            path="/profile/products"
            element={<ProductSellProfilePage />}
          />
          <Route path="/profile/store" element={<StoreProfilePage />} />
          <Route path={`/profile/${user.id}`} element={<ProfilePage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
