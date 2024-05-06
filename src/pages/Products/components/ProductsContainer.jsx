import { useState } from "react";
import { useLoaderData } from "react-router-dom";

import { ProductsGrid } from "../../../components";

import ProductsList from "./ProductsList";
import Header from "./Header";
import NoProductsMatched from "./NoProductsMatched";

const ProductsContainer = () => {
  const { meta } = useLoaderData();

  const [layout, setLayout] = useState("grid");

  const totalProducts = meta.pagination.total;

  const headerProps = {
    layout,
    setLayout,
    totalProducts,
  };

  return (
    <>
      {/* HEADER */}
      <Header {...headerProps} />

      {/* PRODUCTS */}
      <div>
        {totalProducts === 0 ? (
          <NoProductsMatched />
        ) : layout === "grid" ? (
          <ProductsGrid />
        ) : (
          <ProductsList />
        )}
      </div>
    </>
  );
};

export default ProductsContainer;
