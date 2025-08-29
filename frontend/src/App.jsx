import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import Layout from "./layout/index";
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage/index";
import RegisterPage from "./pages/RegisterPage/index";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { authUser } from "./store/thunkFunctions";
import ProtectedRoutes from "./components/ProtectedRoutes";
import NotAuthRoutes from "./components/NotAuthRoutes";
import ProfilePage from "./pages/ProfilePage";
import UploadProductPage from "./pages/UploadProductPage";
import DetailProductPage from "./pages/DetailProdectPage";
import CartPage from "./pages/CartPage";
import HistoryPage from "./pages/HistoryPage";

function App() {
  const isAuth = useSelector((state) => state.user?.isAuth);
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  useEffect(() => {
    if (isAuth) {
      dispatch(authUser());
    }
  }, [isAuth, pathname, dispatch]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<LandingPage />} />
          <Route element={<NotAuthRoutes isAuth={isAuth} />}>
            <Route path="login" element={<LoginPage />} />
            <Route path="register" element={<RegisterPage />} />
          </Route>

          <Route element={<ProtectedRoutes isAuth={isAuth} />}>
            <Route path="product/upload" element={<UploadProductPage />} />
            <Route path="product/:productId" element={<DetailProductPage />} />
            <Route path="user/cart" element={<CartPage />} />
            <Route path="history" element={<HistoryPage />} />
            <Route path="profile" element={<ProfilePage />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
