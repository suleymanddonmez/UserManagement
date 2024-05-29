import React from "react";
import { useRoutes } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Error from "../pages/Error";
import UserList from "../pages/UserManagement/UserList";
import UserAction from "../pages/UserManagement/UserAction";

function Router() {
  const routes = [
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "user-management",
          element: <UserList />,
        },
        {
          path: "user",
          element: <UserAction />,
        },
        {
          path: "user/:userGuid",
          element: <UserAction />,
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "*",
      element: <Error />,
    },
  ];

  return useRoutes(routes);
}

export default Router;
