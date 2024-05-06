import PropTypes from "prop-types";
import { useDispatch } from "react-redux";

import { addItem } from "./../../../features/cart/cartSlice.js";

const ProductInfo = ({
  productColor,
  setProductColor,
  amount,
  setAmount,
  productInfo,
}) => {
  const dispatch = useDispatch();

  const {
    title,
    company,
    dollarsAmount,
    description,
    colors,
    id,
    image,
    price,
  } = productInfo;

  const handleAmountChange = (event) => {
    setAmount(parseInt(event.target.value));
  };

  const cartProduct = {
    cartItemId: id + productColor,
    productID: id,
    image,
    title,
    price,
    company,
    productColor,
    amount,
  };

  const addToCart = () => {
    dispatch(
      addItem({
        product: cartProduct,
      })
    );
  };

  return (
    <div>
      <h1 className="capitalize text-3xl font-bold">{title}</h1>

      <h4 className="text-xl text-neutral-content font-bold mt-2">{company}</h4>

      <p className="mt-3 text-xl">{dollarsAmount}</p>

      <p className="mt-6 leading-8">{description}</p>

      {/* COLORS */}
      <div className="mt-6">
        <h4 className="text-md font-medium tracking-wider capitalize">
          colors
        </h4>

        <div className="mt-2">
          {colors.map((color) => {
            return (
              <button
                type="button"
                key={color}
                className={`badge w-6 h-6 mr-2 ${
                  color === productColor && "border-2 border-secondary"
                }`}
                style={{
                  backgroundColor: color,
                }}
                onClick={() => setProductColor(color)}
              ></button>
            );
          })}
        </div>
      </div>

      {/* AMOUNT */}
      <div className="form-control w-full max-w-xs">
        <label htmlFor="amount" className="label">
          <h4 className="text-md font-medium tracking-wider capitalize">
            amount
          </h4>
        </label>

        <input
          className="input input-bordered"
          id="amount"
          value={amount}
          min={1}
          type="number"
          inputMode="numeric"
          onChange={handleAmountChange}
        />
      </div>

      {/* CAR BUTTON */}
      <div className="mt-10">
        <button className="btn btn-secondary btn-md" onClick={addToCart}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

ProductInfo.propTypes = {
  setProductColor: PropTypes.func.isRequired,
  productColor: PropTypes.string.isRequired,
  setAmount: PropTypes.func.isRequired,
  amount: PropTypes.number.isRequired,
  productInfo: PropTypes.shape({
    title: PropTypes.string.isRequired,
    company: PropTypes.string.isRequired,
    dollarsAmount: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    colors: PropTypes.array.isRequired,
    id: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
  }),
};

export default ProductInfo;
