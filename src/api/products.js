import { axios } from "./../utils/";

/**
 * @typedef {Object} ProductSearchParams
 * @property {string} search - Indicates the search text for the name of the products
 * @property {string} category - indicates the category of the products
 * @property {string} company - indicates the company produced the products
 * @property {string} order - indicates the order that the products should be sorted by
 * @property {number} price - indicates the max value for the product price range between 0 to the price value that products should be filtered by
 * @property {string} shipping - Indicates whether the product has a free shipping or not
 */

const baseUrl = "/products";

export const getFeaturedProducts = () => {
  return axios.get(baseUrl, {
    params: {
      featured: true,
    },
  });
};

/**
 * @param {number} id
 */
export const getSingleProduct = (id) => {
  return axios.get(`${baseUrl}/${id}`);
};

/**
 * @param {ProductSearchParams} params
 */
export const getProducts = (params) => {
  return axios.get(baseUrl, {
    params,
  });
};
