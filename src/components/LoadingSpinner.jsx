import PropTypes from "prop-types";

/**
 * @typedef {Object} LoadingSpinnerParams
 * @property {string} text
 */

/**
 * @param {LoadingSpinnerParams}
 */
const LoadingSpinner = ({ text }) => {
  return (
    <>
      <span className="loading loading-spinner"></span>

      {text}
    </>
  );
};

LoadingSpinner.propTypes = {
  text: PropTypes.string.isRequired,
};

export default LoadingSpinner;
