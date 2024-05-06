import { Link, useLocation } from "react-router-dom";

const baseUrl = import.meta.env?.VITE_BASE_URL;

const BreadCrumb = () => {
  const { pathname } = useLocation();

  const segments = pathname.split("/");

  let url = "/";
  const breadcrumbLinks = segments.map((segment, i) => {
    url += segment;

    return (
      <li key={i} className="capitalize">
        <Link to={`${baseUrl}${url}`}>{segment === "" ? "home" : segment}</Link>
      </li>
    );
  });

  return (
    <div className="text-md breadcrumbs">
      <ul>{breadcrumbLinks}</ul>
    </div>
  );
};

export default BreadCrumb;
