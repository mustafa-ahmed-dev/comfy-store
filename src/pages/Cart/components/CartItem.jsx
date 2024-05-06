import PropTypes from "prop-types";
import { useDispatch } from "react-redux";

import { removeItem, editItem } from "./../../../features/cart/cartSlice";
import { formatPrice } from "../../../utils";

const CartItem = ({ item }) => {
  const { cartItemId, title, price, image, amount, company, productColor } =
    item;

  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(removeItem({ cartItemId }));
  };

  const handleAmountChange = (event) => {
    dispatch(editItem({ cartItemId, amount: parseInt(event.target.value) }));
  };

  return (
    <article
      key={cartItemId}
      className="mb-12 flex flex-col sm:flex-row flex-wrap border-b border-base-300 pb-6 last:border-b-0"
    >
      {/* IMAGE */}
      <img
        src={image}
        alt={title}
        className="h-24 w-24 rounded-lg sm:h-32 sm:w-32 object-cover"
      />

      {/* INFO */}
      <div className="sm:ml-16 sm:w-48">
        {/* TITLE */}
        <h3 className="capitalize font-medium">{title}</h3>

        {/* COMPANY */}
        <h4 className="capitalize text-sm text-neutral-content mt-2">
          {company}
        </h4>

        {/* COLOR */}
        <p className="mt-2 text-sm capitalize flex items-center gap-x-2">
          color:&nbsp;
          <span
            className="badge badge-sm"
            style={{
              backgroundColor: productColor,
            }}
          ></span>
        </p>
      </div>

      <div className="sm:ml-12">
        {/* AMOUNT */}
        <div className="form-control max-w-xs">
          <label htmlFor="amount" className="label p-0">
            <span className="label-text capitalize">amount</span>
          </label>

          <input
            className="input input-secondary input-bordered"
            id="amount"
            value={amount}
            min={0}
            type="number"
            inputMode="numeric"
            onChange={handleAmountChange}
          />
        </div>

        {/* REMOVE */}
        <button
          className="mt-2 link link-primary link-hover text-sm"
          onClick={handleRemove}
        >
          remove
        </button>
      </div>

      {/* PRICE */}
      <p className="font-medium sm:ml-auto">{formatPrice(price)}</p>
    </article>
  );
};

CartItem.propTypes = {
  item: PropTypes.shape({
    cartItemId: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
    company: PropTypes.string.isRequired,
    productColor: PropTypes.string.isRequired,
  }),
};

export default CartItem;
