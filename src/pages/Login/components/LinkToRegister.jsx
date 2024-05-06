import { Link } from "react-router-dom";

const LinkToRegister = () => {
  return (
    <p className="text-center">
      Not a member yet?&nbsp;
      <Link
        to="/register"
        className="ml-2 link link-hover link-primary capitalize"
      >
        register
      </Link>
    </p>
  );
};

export default LinkToRegister;
