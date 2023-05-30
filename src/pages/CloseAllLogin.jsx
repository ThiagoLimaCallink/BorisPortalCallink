import React, { useState } from "react";
import { Helmet } from "react-helmet";
import Sidebar from "../partials/Sidebar";
import Header from "../partials/Header";
import FecharTodosLogin from "../partials/CloseLogin/FecharTodosLogin";
const CloseAllLogin = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <>
      <Helmet>
        <title>Portal Boris fechar todos os logins</title>
      </Helmet>
      <div className="flex h-screen overflow-hidden">
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
          <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
          <FecharTodosLogin />
        </div>
      </div>
    </>
  );
};

export default CloseAllLogin;
