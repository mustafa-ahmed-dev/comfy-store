import PropTypes from "prop-types";

/**
 * @typedef {Object} FormCheckboxProps
 * @property {string} label - indicates the checkbox label
 * @property {string} name - indicates the checkbox name
 * @property {boolean} defaultValue - indicates the checkbox defaultValue
 * @property {string} size - indicates the checkbox size
 */

/**
 * @param {FormCheckboxProps} param0
 */
const FormCheckbox = ({ label, name, defaultValue, size }) => {
  return (
    <div className="form-control items-center">
      <label htmlFor={name} className="label cursor-pointer">
        <span className="label-text capitalize">{label}</span>
      </label>

      <input
        type="checkbox"
        name={name}
        id={name}
        defaultChecked={defaultValue}
        className={`checkbox checkbox-primary ${size}`}
      />
    </div>
  );
};

FormCheckbox.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  defaultValue: PropTypes.bool.isRequired,
  size: PropTypes.string.isRequired,
};

export default FormCheckbox;
