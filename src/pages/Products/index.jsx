import { PaginationContainer } from "./../../components";

import { Filters, ProductsContainer } from "./components";

import { getProducts } from "../../api/products";

const productsQuery = (params) => {
  const { search, category, company, sort, price, shipping, page } = params;

  return {
    queryKey: [
      "products",
      search ?? "",
      category ?? "all",
      company ?? "all",
      sort ?? "a-z",
      price ?? 10_000,
      shipping ?? false,
      page ?? 1,
    ],
    queryFn: () => getProducts(params),
  };
};

export const loader =
  (queryClient) =>
  async ({ request }) => {
    const params = Object.fromEntries([
      ...new URL(request.url).searchParams.entries(),
    ]);

    const response = await queryClient.ensureQueryData(productsQuery(params));

    const { data: products, meta } = response.data;

    return {
      products,
      meta,
      params,
    };
  };

const Products = () => {
  return (
    <>
      <Filters />

      <ProductsContainer />

      <PaginationContainer />
    </>
  );
};

export default Products;
