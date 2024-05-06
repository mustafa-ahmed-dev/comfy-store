import PropTypes from "prop-types";

import { BsFillGridFill, BsList } from "react-icons/bs";

const Header = ({ layout, setLayout, totalProducts }) => {
  const setActiveStyles = (pattern) => {
    return `text-xl btn btn-circle btn-sm ${
      pattern === layout
        ? "btn-primary text-primary-content"
        : "btn-ghost text-base-content"
    }`;
  };

  const text = `${totalProducts} product${totalProducts > 1 ? "s" : ""}`;

  const buttons = [
    {
      icon: <BsFillGridFill />,
      pattern: "grid",
    },
    {
      icon: <BsList />,
      pattern: "list",
    },
  ];

  return (
    <div className="flex justify-between items-center mt-8 border-b border-base-300 pb-5">
      <h4 className="font-medium text-md">{text}</h4>

      <div className="flex gap-x-2">
        {buttons.map((button, i) => {
          const { pattern, icon } = button;

          return (
            <button
              key={i}
              type="button"
              onClick={() => setLayout(pattern)}
              className={setActiveStyles(pattern)}
            >
              {icon}
            </button>
          );
        })}
      </div>
    </div>
  );
};

Header.propTypes = {
  setLayout: PropTypes.func.isRequired,
  layout: PropTypes.string.isRequired,
  totalProducts: PropTypes.number.isRequired,
};

export default Header;
