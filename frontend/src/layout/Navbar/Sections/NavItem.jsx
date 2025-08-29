import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logoutUser } from "../../../store/thunkFunctions";
import { AiOutlineShoppingCart } from "react-icons/ai";
const routes = [
  { to: "/login", name: "로그인", auth: false },
  { to: "/register", name: "회원가입", auth: false },
  { to: "", name: "로그아웃", auth: true },
  { to: "/product/upload", name: "업로드", auth: true },
  {
    to: "/user/cart",
    name: "카트",
    auth: true,
    icon: <AiOutlineShoppingCart style={{ fontSize: "1.4rem" }} />,
  },
  { to: "/history", name: "주문목록", auth: true },
];

const NavItem = ({ mobile }) => {
  const isAuth = useSelector((state) => state.user?.isAuth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logoutUser()).then(() => {
      navigate("/login");
    });
  };
  return (
    <>
      <ul
        className={`flex text-md justify-center items-center w-full gap-4 ${
          mobile ? "flex-col bg-gray-900 h-full" : ""
        } `}
      >
        {routes.map((route) => {
          if (isAuth !== route.auth) return null;

          if (route.name === "로그아웃") {
            return (
              <li
                key={route.name}
                className="py-2 text-center border-b-4 cursor-pointer"
              >
                <button onClick={handleLogout}>{route.name}</button>
              </li>
            );
          } else if (route.name === "카트") {
            return (
              <li
                key={route.name}
                className="relative py-2 text-center border-b-4 cursor-pointer"
              >
                <Link to={route.to}>
                  {route.icon}
                  <span className="absolute top-0 inline-flex items-center justify-center w-4 h-4 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -right-3">
                    {1}
                  </span>
                </Link>
              </li>
            );
          } else {
            return (
              <li
                key={route.name}
                className="py-2 text-center border-b-4 cursor-pointer"
              >
                <Link to={route.to}>{route.name}</Link>
              </li>
            );
          }
        })}
      </ul>
    </>
  );
};

export default NavItem;
