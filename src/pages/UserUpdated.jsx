import React, { useState } from "react";
import { Helmet } from "react-helmet";
import Sidebar from "../partials/Sidebar";
import Header from "../partials/Header";
import UpdatedUser from "../partials/UpdatedUsuarios/UpdatedUser";

const UserUpdated = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <>
      <Helmet>
        <title>Portal Boris Atualizar Usuario</title>
      </Helmet>
      <div className="flex h-screen overflow-hidden">
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
          <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
          <UpdatedUser />
        </div>
      </div>
    </>
  );
};

export default UserUpdated;
