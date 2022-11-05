import React from "react";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <React.Fragment>
      <header className="">Header</header>
      <nav className="">Nav</nav>
      <main className="">
        Main
        <Outlet />
      </main>
      <footer className="">Footer</footer>
    </React.Fragment>
  );
};

export default AppLayout;
