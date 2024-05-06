import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { useQueryClient } from "@tanstack/react-query";

import { logout } from "../features/user/userSlice";
import { clearCart } from "../features/cart/cartSlice";

const UserInfo = ({ username }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const handleLogout = () => {
    navigate("/");
    dispatch(logout());
    dispatch(clearCart());
    queryClient.removeQueries();
  };

  return (
    <div className="flex gap-x-2 sm:gap-x-8 items-center">
      <p className="text-xs sm:text-sm">Hello, {username}</p>

      <button
        className="btn btn-xs btn-outline btn-primary"
        onClick={handleLogout}
      >
        logout
      </button>
    </div>
  );
};

UserInfo.propTypes = {
  username: PropTypes.string.isRequired,
};

const Header = () => {
  const user = useSelector((state) => state.userState.user);

  return (
    <header className="bg-neutral py-2 text-neutral-content">
      <div className="align-element flex justify-center sm:justify-end">
        {user ? (
          // User Info
          <UserInfo username={user.username} />
        ) : (
          // Links
          <div className="flex gap-x-6 justify-center items-center">
            <Link
              to="/login"
              className="link link-hover text-xs sm:text-sm capitalize"
            >
              Sign in / Guest
            </Link>

            <Link
              to="/register"
              className="link link-hover text-xs sm:text-sm capitalize"
            >
              create account
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
