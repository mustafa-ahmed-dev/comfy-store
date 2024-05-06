import { useRouteError } from "react-router-dom";

import { NotFoundError, GenericError } from "./components";
import { Navbar } from "../../components";

const Error = () => {
  const error = useRouteError();

  console.error(error);

  return (
    <div>
      <Navbar />

      <main className="grid  place-items-center px-8 h-screen">
        {error.status === 404 ? <NotFoundError /> : <GenericError />}
      </main>
    </div>
  );
};

export default Error;
