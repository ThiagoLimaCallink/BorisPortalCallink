// IMPORTAÇÃO DAS PÁGINAS
import AlertaBoris from "../../pages/AlertaBoris";
import ListarUser from "../../pages/ListarUser";
import ListarAcesso from "../../pages/ListerAcesso";
import ListaLogin from "../../pages/ListaLogin";
import CriarUsuario from "../../pages/CriarUsuario";
import CriarAcesso from "../../pages/CriarAcesso";
import Dashboard from "../../pages/Dashboard";
import Login from "../../pages/LoginPage";
import CriarLogin from "../../pages/CriarLogin";
import UserLoginUpdated from "../../pages/UserLoginUpdated";
import UserAcessoUpdated from "../../pages/UserAcessoUpdated";
import UserUpdated from "../../pages/UserUpdated";
import ListarPerfil from "../../pages/ListerPerfil";
import UserPerfilUpdated from "../../pages/UserPerfilUpdated";
import CloseLogin from "../../pages/CloseLogin";
import CloseAllLogin from "../../pages/CloseAllLogin";
import AllRelatorios from "../../pages/AllRelatorios";
import CriarPerfil from "../../pages/CriarPerfil";

const rotas = [
  {
    path: "/",
    component: Login,
    exact: true,
  },
  {
    path: "/home",
    component: Dashboard,
    private: true,
  },
  {
    path: "/alertas",
    component: AlertaBoris,
    private: true,
  },
  {
    path: "/home/listaruser",
    component: ListarUser,
    private: true,
  },
  {
    path: "/listarAcesso",
    component: ListarAcesso,
    private: true,
  },
  {
    path: "/listarlogin",
    component: ListaLogin,
    private: true,
  },
  {
    path: "/criaruser",
    component: CriarUsuario,
    private: true,
  },
  {
    path: "/criaracesso",
    component: CriarAcesso,
    private: true,
  },
  {
    path: "/criarlogin",
    component: CriarLogin,
    private: true,
  },
  {
    path: "/criarperfil",
    component: CriarPerfil,
    private: true,
  },
  {
    path: "/updatedlogin",
    component: UserLoginUpdated,
    private: true,
  },
  {
    path: "/updatedacesso",
    component: UserAcessoUpdated,
    private: true,
  },
  {
    path: "/updateuser",
    component: UserUpdated,
    private: true,
  },
  {
    path: "/listaperfil",
    component: ListarPerfil,
    private: true,
  },
  {
    path: "/updatedperfil",
    component: UserPerfilUpdated,
    private: true,
  },
  {
    path: "/closelogin",
    component: CloseLogin,
    private: true,
  },
  {
    path: "/closealllogin",
    component: CloseAllLogin,
    private: true,
  },
  {
    path: "/relatorioportal",
    component: AllRelatorios,
    private: true,
  },
];

export default rotas;
