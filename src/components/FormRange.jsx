import { useState } from "react";
import PropTypes from "prop-types";

import { formatPrice } from "../utils";

/**
 * @typedef {Object} FormRangeParams
 * @property {string} label - indicates the label of the range input
 * @property {string} name - indicates the name of the range input
 * @property {string} size - indicates the size of the range input
 * @property {number} price - indicates the price of the range input
 */

/**
 * @param {FormRangeParams}
 */
const FormRange = ({ label, name, size, price }) => {
  const step = 1e3;
  const maxPrice = 1e5;
  const minPrice = 0;

  const [selectedPrice, setSelectedPrice] = useState(price || maxPrice);

  const handlePriceChange = (event) => setSelectedPrice(event.target.value);

  return (
    <div className="form-control">
      <label htmlFor={name} className="label cursor-pointer">
        <span className="label-text capitalize">{label}</span>

        <span>{formatPrice(selectedPrice)}</span>
      </label>

      <input
        type="range"
        name={name}
        min={minPrice}
        max={maxPrice}
        value={selectedPrice}
        onChange={handlePriceChange}
        step={step}
        className={`range range-primary ${size}`}
      />

      <div className="w-full flex justify-between text-xs px-2 mt-2">
        <span className="font-bold text-md">{minPrice}</span>

        <span className="font-bold text-md">Max: {formatPrice(maxPrice)}</span>
      </div>
    </div>
  );
};

FormRange.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default FormRange;
