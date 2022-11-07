import React from "react";
import { Outlet } from "react-router-dom";

import NavBar from "../components/NavBar";
import HeaderBar from "../components/HeaderBar";

/** Layout for the entire application. Provides a way for users to navigate */
function AppLayout() {
  return (
    <React.Fragment>
      <HeaderBar />
      <NavBar />
      <main className="flex-1 min-h-[calc(100vh-4rem)] sm:left-16">
        <div className="flex-1 h-full max-w-7xl mx-auto">
          <Outlet />
        </div>
      </main>
    </React.Fragment>
  );
}

export default AppLayout;
