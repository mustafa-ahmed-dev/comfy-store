import { Link } from "react-router-dom";

const LinkToLogin = () => {
  return (
    <p className="text-center">
      Already a member?&nbsp;
      <Link
        to="/login"
        className="ml-2 link link-hover link-primary capitalize"
      >
        login
      </Link>
    </p>
  );
};

export default LinkToLogin;
