import React from "react";
import { Outlet } from "react-router-dom";
import NavbarComp from "../components/NavbarComp";
import store from "../store/store";
import { Provider } from "react-redux";

const RootLayout = () => {
  return (
    <>
      <Provider store={store}>
        <NavbarComp />
        <main>
          <Outlet />
        </main>
      </Provider>
    </>
  );
};

export default RootLayout;
