import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React, { useEffect } from "react";
import { RouterProvider } from "react-router-dom";
import routers from "../routes/router";
import { ToastContainer } from "react-toastify";
import { useGetProfile } from "../hooks/api/useGetProfile";

const queryClient = new QueryClient();

const Providers = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={routers}>{children}</RouterProvider>
      <ToastContainer />
    </QueryClientProvider>
  );
};

export default Providers;
