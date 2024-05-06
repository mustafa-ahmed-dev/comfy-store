import { axios } from "../utils";

/**
 * @typedef {Object} CartItem
 * @property {number} amount
 * @property {string} cartID
 * @property {string} company
 * @property {string} image
 * @property {string} price
 * @property {string} productColor
 * @property {number} productID
 * @property {string} title
 */

/**
 * @typedef {Object} PlaceOrderData
 * @property {string} address
 * @property {Array<CartItem>} cartItems
 * @property {number} chargeTotal
 * @property {string} name
 * @property {number} numItemsInCart
 * @property {string} orderTotal
 */

const baseUrl = "/orders";

/**
 * @param {PlaceOrderData} data
 * @param {string} token
 */
export const placeOrder = (data, token) => {
  return axios.post(
    baseUrl,
    { data },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};

/**
 * @param {string} token
 */
export const getOrders = (params, token) => {
  return axios.get(baseUrl, {
    params,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
