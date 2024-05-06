/**
 * @param {number} price
 */
const formatPrice = (price) => {
  const dollarsAmount = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(price / 100);

  return dollarsAmount;
};

export default formatPrice;
