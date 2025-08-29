import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const routes = [
  { to: "/login", name: "로그인", auth: false },
  { to: "/register", name: "회원가입", auth: false },
  { to: "", name: "로그아웃", auth: true },
];

const NavItem = ({ mobile }) => {
  const isAuth = useSelector((state) => state.user?.isAuth);

  const handleLogout = () => {};
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
