import PropTypes from "prop-types";
import { useNavigation } from "react-router-dom";

import LoadingSpinner from "./LoadingSpinner";

/**
 * @typedef {Object} SubmitButtonParams
 * @property {string} text - Indicates the submit button's text
 * @property {boolean} isBlock - Indicates whether the element is a block level element or not
 */

/**
 * @param {SubmitButtonParams}
 */
const SubmitButton = ({ text, isBlock }) => {
  const navigation = useNavigation();

  const isSubmitting = navigation.state === "submitting";

  return (
    <button
      type="submit"
      className={`btn btn-primary capitalize ${isBlock && "btn-block"}`}
      disabled={isSubmitting}
    >
      {isSubmitting ? <LoadingSpinner text="sending..." /> : text}
    </button>
  );
};

SubmitButton.propTypes = {
  text: PropTypes.string.isRequired,
  isBlock: PropTypes.bool,
};

export default SubmitButton;
