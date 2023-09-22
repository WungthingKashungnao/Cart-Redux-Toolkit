import React from "react";
import { Outlet } from "react-router-dom";
import NavbarComp from "../components/NavbarComp";

const RootLayout = () => {
  return (
    <div>
      <NavbarComp />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default RootLayout;
