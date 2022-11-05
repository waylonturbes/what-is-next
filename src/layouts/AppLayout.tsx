import React from "react";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <React.Fragment>
      <header>Header</header>
      <nav>Nav</nav>
      <main>
        Main
        <Outlet />
      </main>
      <footer>Footer</footer>
    </React.Fragment>
  );
};

export default AppLayout;
