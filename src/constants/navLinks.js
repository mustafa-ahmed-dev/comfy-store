import { nanoid } from "nanoid";

const links = [
  {
    id: nanoid(),
    url: "/",
    text: "home",
    isProtected: false,
  },
  {
    id: nanoid(),
    url: "/about",
    text: "about",
    isProtected: false,
  },
  {
    id: nanoid(),
    url: "/products",
    text: "products",
    isProtected: false,
  },
  {
    id: nanoid(),
    url: "/cart",
    text: "cart",
    isProtected: false,
  },
  {
    id: nanoid(),
    url: "/checkout",
    text: "checkout",
    isProtected: true,
  },
  {
    id: nanoid(),
    url: "/orders",
    text: "orders",
    isProtected: true,
  },
];

export default links;
