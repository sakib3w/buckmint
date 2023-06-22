import React from "react";
import Page404 from "../containers/Page404NotFound/Page404";
const UserDashboard = React.lazy(() =>
  import("../containers/UserPages/HomePage/index")
);
const AddSerialNumber = React.lazy(() =>
import("../containers/UserPages/HomePage/AddSerialNumber")
)

export const routers = [
  {
    path: "*",
    exact: true,
    name: "Error",
    permission: ["user", "admin"],
    component: Page404,
  },
  {
    path: "/",
    exact: true,
    name: "All Serial Number",
    permission: ["user", "admin"],
    component: UserDashboard,
  },
  {
    path: "/addSerialNumber",
    exact: true,
    name: "Add Serial Number",
    permission: ["user", "admin"],
    component: AddSerialNumber,
  },
];
