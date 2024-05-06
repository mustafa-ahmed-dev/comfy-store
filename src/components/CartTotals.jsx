import { useSelector } from "react-redux";

import { formatPrice } from "./../utils";

const CartTotals = () => {
  const { cartTotal, shipping, tax, orderTotal } = useSelector(
    (state) => state.cartState
  );

  const totals = [
    {
      text: "subtotal",
      value: formatPrice(cartTotal),
    },
    {
      text: "shipping",
      value: formatPrice(shipping),
    },
    {
      text: "tax",
      value: formatPrice(tax),
    },
    {
      text: "order total",
      value: formatPrice(orderTotal),
    },
  ];

  return (
    <div className="card bg-base-200">
      <div className="card-body">
        {totals.map((total, i) => {
          const { text, value } = total;

          const isLastElement = i === totals.length - 1;

          const classes = isLastElement
            ? `text-sm mt-4`
            : `text-xs border-b border-secondary`;

          return (
            <p key={i} className={`flex justify-between ${classes} pb-2`}>
              <span className="capitalize">{text}</span>
              <span className="font-medium">{value}</span>
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default CartTotals;
