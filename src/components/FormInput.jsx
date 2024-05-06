import PropTypes from "prop-types";

/**
 * @typedef {Object} FormInputParams
 * @property {string} label - Indicates the input's label
 * @property {string} name - Indicates the input's name
 * @property {string} type - Indicates the input's type
 * @property {string} defaultValue - Indicates the input's default value
 * @property {string} placeholder - Indicates the input's placeholder text
 */

/**
 * @param {FormInputParams}
 */
const FormInput = ({ label, name, type, defaultValue, placeholder, size }) => {
  return (
    <div className="form-control">
      <label className="label" htmlFor={name}>
        <span className="label-text capitalize">{label}</span>
      </label>

      <input
        type={type}
        name={name}
        id={name}
        defaultValue={defaultValue}
        placeholder={placeholder}
        className={`input input-bordered ${size}`}
      />
    </div>
  );
};

FormInput.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  defaultValue: PropTypes.string,
  placeholder: PropTypes.string,
  size: PropTypes.string,
};

export default FormInput;
