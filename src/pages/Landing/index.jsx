import { Hero, FeaturedProducts } from "./components";

import { getFeaturedProducts } from "./../../api/products";

const featuredProductsQuery = {
  queryKey: ["products", "featured"],
  queryFn: () => getFeaturedProducts(),
};

export const loader = (queryClient) => async () => {
  const response = await queryClient.ensureQueryData(featuredProductsQuery);

  const products = response.data.data;

  return {
    products,
  };
};

const Landing = () => {
  return (
    <>
      <Hero />

      <FeaturedProducts />
    </>
  );
};

export default Landing;
