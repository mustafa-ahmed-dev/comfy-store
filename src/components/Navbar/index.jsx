import { NavLink } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { BsCart3 } from "react-icons/bs";
import { FaBarsStaggered } from "react-icons/fa6";

import { NavLinks } from "./components";

import { themes } from "../../constants";
import { changeTheme } from "../../features/theme/themeSlice";

const Navbar = () => {
  const { numItemsInCart } = useSelector((state) => state.cartState);
  const { theme } = useSelector((state) => state.themeState);
  const dispatch = useDispatch();

  const handleThemeChange = (event) => {
    dispatch(changeTheme(event.target.value));
  };

  return (
    <nav className="bg-base-200">
      <div className="navbar align-element">
        <div className="navbar-start">
          {/* TITLE */}
          <NavLink
            to="/"
            className="hidden lg:flex btn btn-primary text-3xl items-center"
          >
            C
          </NavLink>

          {/* DROPDOWN */}
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <FaBarsStaggered className="h-6 w-6" />
            </label>

            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-200 rounded-box w-52"
            >
              <NavLinks />
            </ul>
          </div>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal ">
            <NavLinks />
          </ul>
        </div>

        <div className="navbar-end">
          {/* THEME SETUP */}
          <select
            id="theme-select"
            className="select select-bordered capitalize"
            defaultValue={theme || "select theme"}
            onChange={handleThemeChange}
          >
            <option className="capitalize" disabled value="select theme">
              select theme
            </option>

            {themes.map((theme) => {
              const { id, name, text } = theme;

              return (
                <option key={id} value={name} className="capitalize">
                  {text}
                </option>
              );
            })}
          </select>

          {/* CART LINK */}
          <NavLink to="/cart" className="btn -btn-ghost btn-circle btn-md ml-4">
            <div className="indicator">
              <BsCart3 className="h-6 w-6" />

              <span className="badge badge-sm badge-primary indicator-item">
                {numItemsInCart}
              </span>
            </div>
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
