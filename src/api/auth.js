import { axios } from "../utils";

const baseUrl = "/auth/local";

/**
 * @typedef {Object} RegisterUserParams
 * @property {string} email
 * @property {string} username
 * @property {string} password
 */

/**
 * @typedef {Object} LoginUserParams
 * @property {string} identifier
 * @property {string} password
 */

/**
 * @param {RegisterUserParams} data
 */
export const registerUser = (data) => {
  return axios.post(`${baseUrl}/register`, data);
};

/**
 * @param {LoginUserParams} data
 */
export const loginUser = (data) => {
  return axios.post(baseUrl, data);
};
