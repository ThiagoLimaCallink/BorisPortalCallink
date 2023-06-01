/* HOOKS */
import React, { useState } from "react";
/* TITLE PORTAL */
import { Helmet } from "react-helmet";
/* COMPONENTS */
import Sidebar from "../partials/Sidebar";
import Header from "../partials/Header";
import FormCreatePerfil from "../partials/CreateUsuarios/FormCreatePerfil";
const CriarPerfil = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <>
      <Helmet>
        <title>Portal Boris Criar Perfil</title>
      </Helmet>
      <div className="flex h-screen overflow-hidden">
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
          <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
          <FormCreatePerfil />
        </div>
      </div>
    </>
  );
};

export default CriarPerfil;
