import React, { useState } from "react";
import { Link } from "react-router-dom";
import NavItem from "./Sections/NavItem";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  const handleMenu = () => {
    setMenu(!menu);
  };
  return (
    <div>
      <section className="relative z-10 text-white bg-gray-900">
        <div className="w-full">
          <div className="flex items-center justify-between mx-5 sm:mx-10 lg:mx-20">
            {/* logo */}
            <div className="flex items-center text-2xl h-14">
              <Link to="/">Logo</Link>
            </div>

            {/* menu button */}
            <div className="text-2xl sm:hidden">
              <button onClick={handleMenu}>{menu ? "-" : "+"}</button>
            </div>

            {/* big screen nav-item */}
            <div className="hidden sm:block">
              <NavItem mobile />
            </div>
          </div>

          {/* mobile nav-item */}
          <div className="block sm:hidden">{menu && <NavItem />}</div>
        </div>
      </section>
    </div>
  );
};

export default Navbar;
