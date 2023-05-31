// IMPORTAÇÃO
import React, { useContext, useEffect } from "react";
//REACT ROUTER DOM
import { Routes, Route, Navigate } from "react-router-dom";
//CSS
import "./css/style.css";
// CHART
import "./charts/ChartjsConfig";
// HOOKS
import { AuthContext } from "./hooks/useAuthLogin";
// IMAGENS
import AlertaBoris from "./pages/AlertaBoris";
// PAGES
import ListarUser from "./pages/ListarUser";
import ListarAcesso from "./pages/ListerAcesso";
import ListaLogin from "./pages/ListaLogin";
import CriarUsuario from "./pages/CriarUsuario";
import CriarAcesso from "./pages/CriarAcesso";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/LoginPage";
import CriarLogin from "./pages/CriarLogin";
import UserLoginUpdated from "./pages/UserLoginUpdated";
import UserAcessoUpdated from "./pages/UserAcessoUpdated";
import UserUpdated from "./pages/UserUpdated";
import ListarPerfil from "./pages/ListerPerfil";
import UserPerfilUpdated from "./pages/UserPerfilUpdated";
import CloseLogin from "./pages/CloseLogin";
import CloseAllLogin from "./pages/CloseAllLogin";
import AllRelatorios from "./pages/AllRelatorios";
import Modal01 from "./partials/relatorio/modal/Modal01";

function App() {
  //Variable that recognizes the user
  const { signed } = useContext(AuthContext);
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route
          path="/home"
          element={signed ? <Dashboard /> : <Navigate to="/" />}
        />
        <Route
          path="/alerta"
          element={signed ? <AlertaBoris /> : <Navigate to="/" />}
        />
        <Route
          path="/home/listaruser"
          element={signed ? <ListarUser /> : <Navigate to="/" />}
        />
        <Route
          path="/listarAcesso"
          element={signed ? <ListarAcesso /> : <Navigate to="/" />}
        />
        <Route
          path="/listarlogin"
          element={signed ? <ListaLogin /> : <Navigate to="/" />}
        />
        <Route
          path="/criaruser"
          element={signed ? <CriarUsuario /> : <Navigate to="/" />}
        />
        <Route
          path="/criaracesso"
          element={signed ? <CriarAcesso /> : <Navigate to="/" />}
        />
        <Route
          path="/criarlogin"
          element={signed ? <CriarLogin /> : <Navigate to="/" />}
        />
        <Route
          path="/criarperfil"
          element={signed ? <CriarLogin /> : <Navigate to="/" />}
        />
        <Route
          path="/updatedlogin"
          element={signed ? <UserLoginUpdated /> : <Navigate to="/" />}
        />
        <Route
          path="/updatedacesso"
          element={signed ? <UserAcessoUpdated /> : <Navigate to="/" />}
        />
        <Route
          path="/updateuser"
          element={signed ? <UserUpdated /> : <Navigate to="/" />}
        />
        <Route
          path="/listaperfil"
          element={signed ? <ListarPerfil /> : <Navigate to="/" />}
        />
        <Route
          path="/updatedperfil"
          element={signed ? <UserPerfilUpdated /> : <Navigate to="/" />}
        />
        <Route
          path="/closelogin"
          element={signed ? <CloseLogin /> : <Navigate to="/" />}
        />
        <Route
          path="/closealllogin"
          element={signed ? <CloseAllLogin /> : <Navigate to="/" />}
        />
        <Route
          path="/relatorioportal"
          element={signed ? <AllRelatorios /> : <Navigate to="/" />}
        />
      </Routes>
    </>
  );
}

export default App;
