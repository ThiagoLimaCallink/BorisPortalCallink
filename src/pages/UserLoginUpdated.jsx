import React, { useState } from "react";
import { Helmet } from "react-helmet";
import Sidebar from "../partials/Sidebar";
import Header from "../partials/Header";
import UpdatedUsersLogin from "../partials/UpdatedUsuarios/UpdatedUsersLogin";
const UserLoginUpdated = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <>
      <Helmet>
        <title>Portal Boris Atualizar Login</title>
      </Helmet>
      <div className="flex h-screen overflow-hidden">
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
          <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
          <UpdatedUsersLogin />
        </div>
      </div>
    </>
  );
};

export default UserLoginUpdated;
