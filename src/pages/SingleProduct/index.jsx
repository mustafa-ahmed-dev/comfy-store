import { useLoaderData } from "react-router-dom";
import { useState } from "react";

import { BreadCrumb } from "./../../components";
import { ProductInfo } from "./components";

import { getSingleProduct } from "../../api/products";
import { formatPrice } from "./../../utils";

const singleProductQuery = (id) => {
  return {
    queryKey: ["products", id],
    queryFn: () => getSingleProduct(id),
  };
};

export const loader =
  (queryClient) =>
  async ({ params }) => {
    const { id } = params;

    const response = await queryClient.ensureQueryData(singleProductQuery(id));

    return { product: response.data.data };
  };

const SingleProduct = () => {
  const { product } = useLoaderData();

  const { image, title, price, description, colors, company } =
    product.attributes;

  const [productColor, setProductColor] = useState(colors[0]);
  const [amount, setAmount] = useState(1);

  const dollarsAmount = formatPrice(price);

  const productInfoProps = {
    productInfo: {
      id: product.id,
      title,
      company,
      dollarsAmount,
      description,
      colors,
      image,
      price,
    },
    setProductColor,
    productColor,
    amount,
    setAmount,
  };

  return (
    <section>
      <BreadCrumb />

      {/* PRODUCT */}
      <div className="mt-6 grid gap-y-8 lg:grid-cols-2 lg:gap-x-16">
        {/* IMAGE */}
        <img
          src={image}
          alt={title}
          className="w-96 h-96 object-cover  rounded-lg lg:w-full"
        />

        {/* Product INFO */}
        <ProductInfo {...productInfoProps} />
      </div>
    </section>
  );
};

export default SingleProduct;
