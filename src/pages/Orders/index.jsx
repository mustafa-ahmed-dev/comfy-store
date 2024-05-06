import { redirect, useLoaderData } from "react-router-dom";
import { toast } from "react-toastify";

import { OrdersList } from "./components";
import { SectionTitle, ComplexPaginationContainer } from "./../../components";
import { getOrders } from "../../api/order";

const ordersQuery = (params, user) => {
  return {
    queryKey: [
      "orders",
      user.id,
      user.username,
      params.page ? parseInt(params.page) : 1,
    ],
    queryFn: () => getOrders(params, user.token),
  };
};

export const loader =
  (store, queryClient) =>
  async ({ request }) => {
    const user = store.getState().userState.user;

    if (!user) {
      toast.warn("You must be logged in to view the orders");

      return redirect("/login");
    }

    const params = Object.fromEntries([
      ...new URL(request.url).searchParams.entries(),
    ]);

    try {
      const { data: orders, meta } = (
        await queryClient.ensureQueryData(ordersQuery(params, user))
      ).data;

      return { orders, meta };
    } catch (error) {
      const errorMessage =
        error?.response?.data?.error?.message ||
        "There was error placing your order";

      toast.error(errorMessage);

      if ([401, 403].includes(error?.response?.status)) {
        return redirect("/login");
      }

      return null;
    }
  };

const Orders = () => {
  const { meta } = useLoaderData();

  if (meta?.pagination?.total < 1) {
    return <SectionTitle text="please make an order" />;
  }

  return (
    <>
      <SectionTitle text="your orders" />

      <OrdersList />

      <ComplexPaginationContainer />
    </>
  );
};

export default Orders;
