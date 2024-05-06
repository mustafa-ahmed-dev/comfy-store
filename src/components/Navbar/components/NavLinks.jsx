import { useSelector } from "react-redux";

import NavLink from "./NavLink";

import { navLinks } from "./../../../constants";

const NavLinks = () => {
  const user = useSelector((state) => state.userState.user);

  return (
    <>
      {navLinks.map((link) => {
        const { id, isProtected, ...linkParams } = link;

        if (!user && isProtected) return null;

        return <NavLink key={id} {...linkParams} />;
      })}
    </>
  );
};

export default NavLinks;
