import PropTypes from "prop-types";

const SelectInput = ({ label, name, list, defaultValue, size }) => {
  return (
    <div className="form-control">
      <label htmlFor={name} className="label">
        <span className="label-text capitalize">{label}</span>

        <select
          name={name}
          id={name}
          className={`select select-bordered ${size}`}
          defaultValue={defaultValue}
        >
          {list.map((item, i) => {
            return (
              <option key={i} value={item}>
                {item}
              </option>
            );
          })}
        </select>
      </label>
    </div>
  );
};

SelectInput.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  list: PropTypes.array.isRequired,
  defaultValue: PropTypes.string,
  size: PropTypes.string,
};

export default SelectInput;
