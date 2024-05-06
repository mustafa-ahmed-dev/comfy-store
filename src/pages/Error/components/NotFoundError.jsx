import { Link } from "react-router-dom";

const NotFoundError = () => {
  return (
    <div className="text-center">
      <p className="text-9xl font-semibold text-primary">404</p>

      <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-5xl">
        Page not found
      </h1>

      {/* 
        Sorry, we couldn’t find the page you’re looking for.
      */}
      <p className="mt-6 text-lg leading-7 ">
        Sorry, we couldn&apos;t find the page you&apos;re looking for.
      </p>

      <div className="mt-10 ">
        <Link to="/" className="btn btn-secondary">
          Go back home
        </Link>
      </div>
    </div>
  );
};

export default NotFoundError;
