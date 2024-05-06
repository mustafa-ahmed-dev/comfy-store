import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { toast } from "react-toastify";

import { loginUser } from "../../../api/auth";
import { login } from "../../../features/user/userSlice";

/**
 * @type {string}
 */
const guestEmail = import.meta.env?.VITE_GUEST_EMAIL;

/**
 * @type {string}
 */
const guestPassword = import.meta.env?.VITE_GUEST_PASSWORD;

const GuestUserButton = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const loginAsGuest = async () => {
    try {
      const userData = {
        identifier: guestEmail,
        password: guestPassword,
      };

      const response = await loginUser(userData);

      const user = {
        token: response.data.jwt,
        ...response.data.user,
      };

      dispatch(login(user));

      toast.success("Welcome test user", {
        draggable: true,
      });

      navigate("/");
    } catch (error) {
      const errorMessage =
        error?.response?.data?.error?.message ||
        "Guest user login error, please try again";

      toast.error(errorMessage, {
        draggable: true,
      });
    }
  };

  return (
    <button
      type="button"
      className="btn btn-secondary btn-block capitalize"
      onClick={loginAsGuest}
    >
      guest user
    </button>
  );
};

export default GuestUserButton;
