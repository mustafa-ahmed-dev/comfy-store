import { NavLink as RouterNavLink } from "react-router-dom";
import PropTypes from "prop-types";

/**
 * @typedef {Object} NavLinkParams
 * @property {string} url - Indicates the nav link's url
 * @property {string} text - Indicates the nav link's text should be displayed
 */

/**
 * @param {NavLinkParams}
 */
const NavLink = ({ url, text }) => {
  return (
    <li>
      <RouterNavLink className="capitalize" to={url}>
        {text}
      </RouterNavLink>
    </li>
  );
};

NavLink.propTypes = {
  url: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default NavLink;
