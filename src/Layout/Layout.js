import React from "react";
import { Outlet } from "react-router-dom";
import Drawer from "../Pages/Drawer/Drawer";

const Layout = () => {
  return (
    <div>
      <Drawer />
      <Outlet />
    </div>
  );
};

export default Layout;
