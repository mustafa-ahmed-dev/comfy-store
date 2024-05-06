import { Form, Link, useLoaderData } from "react-router-dom";

import {
  FormCheckbox,
  FormInput,
  FormRange,
  SelectInput,
} from "../../../components";

import { getBooleanValue } from "../../../utils";

const Filters = () => {
  const {
    meta: { categories, companies },
    params,
  } = useLoaderData();
  const { search, company, price, category, order, shipping } = params;

  const orderTypes = ["a-z", "z-a", "high", "low"];

  return (
    <Form className="bg-base-200 rounded-md px-8 py-4 grid gap-x-4 gap-y-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center">
      {/* SEARCH */}
      <FormInput
        type="search"
        label="search product"
        name="search"
        size="input-sm"
        defaultValue={search}
      />

      {/* CATEGORIES */}
      <SelectInput
        label="select category"
        name="category"
        list={categories}
        size="select-sm"
        defaultValue={categories.includes(category) ? category : categories[0]}
      />

      {/* COMPANIES */}
      <SelectInput
        label="select company"
        name="company"
        list={companies}
        size="select-sm"
        defaultValue={companies.includes(company) ? company : companies[0]}
      />

      {/* ORDER */}
      <SelectInput
        label="sort by"
        name="order"
        list={orderTypes}
        size="select-sm"
        defaultValue={orderTypes.includes(order) ? order : orderTypes[0]}
      />

      {/* RANGE */}
      <FormRange
        label="select price"
        name="price"
        size="range-sm"
        price={+price}
      />

      {/* SHIPPING */}
      <FormCheckbox
        label="free shipping"
        name="shipping"
        size="checkbox-sm"
        defaultValue={getBooleanValue(shipping)}
      />

      {/* BUTTONS */}
      <button type="submit" className="btn btn-primary btn-sm capitalize">
        search
      </button>

      <Link to="/products" className="btn btn-accent btn-sm capitalize">
        reset
      </Link>
    </Form>
  );
};

export default Filters;
