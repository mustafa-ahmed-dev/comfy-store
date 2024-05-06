import { RouterProvider } from "react-router-dom";

import { Provider as ReduxProvider } from "react-redux";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

import { store } from "./store";
import router from "./router";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReduxProvider store={store}>
        <RouterProvider router={router(queryClient)} />
      </ReduxProvider>

      <ReactQueryDevtools initialIsOpen={false} />
      <ToastContainer position="top-right" />
    </QueryClientProvider>
  );
}

export default App;
