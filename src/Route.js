import React from "react";
import { Navigate, useRoutes } from "react-router-dom";
import Dashboard from "./Dashboard";
import CustomerSaga from "./SagaView/CustomerSaga";
import Signup from "./UserView/signup";
import Signin from "./UserView/signin";

export default function Route() {
  return useRoutes([
    {
      path: "/",
      element: <Dashboard />,
      children: [
        { path: "saga", element: <CustomerSaga /> },
        { path: "signup", element: <Signup /> },
        { path: "signin", element: <Signin /> },
      ],
    },
    {
      path: "*",
      element: <Navigate to="/404" replace />,
    },
  ]);
}
