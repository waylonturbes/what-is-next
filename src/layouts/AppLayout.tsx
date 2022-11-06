import React from "react";
import { Outlet } from "react-router-dom";

function AppLayout() {
  return (
    <React.Fragment>
      <header className="w-full h-16 bg-yellow-5">Header</header>
      <nav className="w-20 bg-blue-5 h-full">Nav</nav>
      <main className="bg-red-5 h-full flex-1">
        Main
        <Outlet />
      </main>
    </React.Fragment>
  );
}

export default AppLayout;
