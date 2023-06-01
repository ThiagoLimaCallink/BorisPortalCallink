import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import Sidebar from "../partials/Sidebar";
import Header from "../partials/Header";
import ADM_Gerenciamento from "../utils/axiosbaseurl/ADMGERENCIAMENTO";

const ListaLogin = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [userList, setUserlist] = useState([]);
  const [searchItem, setSearchItem] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(15);
  const [searchClicked, setSearchClicked] = useState(false);
  const [filteredUserList, setFilteredUserList] = useState([]);
  /**BODY DA API */
  const requestApi = {
    escolha: "login",
    processo: "leitura",
  };
  ("");
  /******************************* */
  /**HOOK REQUEST AUTOPLAY  API */
  useEffect(() => {
    handleList();
  }, [currentPage, itemsPerPage]);
  /******************************* */

  /**FUNCTION POST API THIAGO LIMA */
  const handleList = async () => {
    try {
      const response = await ADM_Gerenciamento.post("/", requestApi);
      const dados = response.data;

      const filteredList = dados.filter(searchUser);
      setUserlist(filteredList);
      const startIndex = (currentPage - 1) * itemsPerPage;
      const endIndex = startIndex + itemsPerPage;
      const pagedUserList = filteredList.slice(startIndex, endIndex);
      setFilteredUserList(pagedUserList);
    } catch (err) {
      console.log(err);
    }
  };
  /************************************* */
  /**NEXT PAGE FUNCTION THIAGO LIMA */
  const nextPage = () => {
    if (currentPage < itemsPerPage) {
      setCurrentPage((prevPage) => prevPage + 1);

      /** LOCALIZA NA URL PAGINA QUE USUÁRIO ESTA NO MOMENTO */

      const url = new URL(window.location.href);
      url.searchParams.set("page", currentPage + 1);
      window.history.pushState({}, "", url);
    } else {
      setCurrentPage(1);

      /** LOCALIZA NA URL PAGINA QUE USUÁRIO ESTA NO MOMENTO */

      const url = new URL(window.location.href);
      url.searchParams.delete("page");
      window.history.pushState({}, "", url);

      console.log("Estou caindo aqui");
    }
  };
  /**PREV PAGE FUNCTION THIAGO LIMA */
  const previousPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);

      /** LOCALIZA NA URL PAGINA QUE USUÁRIO ESTA NO MOMENTO */

      const url = new URL(window.location.href);
      url.searchParams.set("page", currentPage - 1);
      window.history.pushState({}, "", url);
    }
  };

  /********************************************* */

  /* FUNCTION SEARCH USERS THIAGO LIMA */
  const searchUser = (user) => {
    if (searchClicked) {
      const nome = user.NOME || "";
      const idUsuario = user.ID_USUARIO || "";
      const idCallink = user.ID_CALLINK || "";
      const email = user.EMAIL || "";
      return (
        String(nome).toLowerCase().includes(searchItem.toLowerCase()) ||
        String(idUsuario).toLowerCase().includes(searchItem.toLowerCase()) ||
        String(idCallink).toLowerCase().includes(searchItem.toLowerCase()) ||
        String(email).toLowerCase().includes(searchItem.toLowerCase())
      );
    }
    return true;
  };

  useEffect(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const pagedUserList = userList.slice(startIndex, endIndex);
    setFilteredUserList(pagedUserList);
  }, [currentPage, itemsPerPage, userList]);

  return (
    <>
      <Helmet>
        <title>Boris Portal Listar Login</title>
      </Helmet>
      <div className="flex h-screen overflow-hidden">
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
          <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

          <div className="col-span-full xl:col-span-6 bg-white shadow-lg rounded-sm border border-slate-200">
            <header className="px-5 py-4  border-slate-100">
              <h2 className="font-semibold text-colorBoldIndigo text-center text-xl">
                LISTA DE LOGIN
              </h2>
            </header>
            <div className="font-sans text-black  bg-white flex items-center justify-center">
              <div className="border rounded overflow-hidden flex">
                <input
                  type="text"
                  className="px-4 py-2"
                  placeholder="Pesquisar..."
                  value={searchItem}
                  onChange={(e) => setSearchItem(e.target.value)}
                />
                <button
                  onClick={() => setSearchClicked(true)}
                  className="flex items-center justify-center px-4 border-l hover:bg-indigo-200 "
                >
                  <svg
                    className="h-4 w-4 text-grey-dark"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z" />
                  </svg>
                </button>
              </div>
            </div>
            <p className="text-center text-gray-500 mt-2">
              Faça sua consulta baseada em 'ID_LOGIN' , 'ID_USUARIO' ,
              'ID_PLATAFORMA', 'LOGIN_USUARIO' 🔍
            </p>
            <div className="p-3">
              {/* Table */}
              <div className="overflow-x-auto">
                <table className="table-auto w-full ">
                  {/* Table header */}
                  <thead className="text-xs font-semibold uppercase text-slate-400 bg-slate-50">
                    <tr>
                      <th className="p-2 whitespace-nowrap">
                        <div className="font-semibold text-left">ID_LOGIN</div>
                      </th>
                      <th className="p-2 whitespace-nowrap">
                        <div className="font-semibold text-left">
                          ID_USUARIO
                        </div>
                      </th>

                      <th className="p-2 whitespace-nowrap">
                        <div className="font-semibold text-center">
                          ID_PLATAFORMA
                        </div>
                      </th>
                      <th className="p-2 whitespace-nowrap">
                        <div className="font-semibold text-center">
                          LOGIN_USUARIO
                        </div>
                      </th>
                    </tr>
                  </thead>
                  {/* Table body */}
                  <tbody className="text-sm divide-y divide-slate-400">
                    {userList.filter(searchUser).map((user, index) => (
                      <tr key={index}>
                        <td className="p-2 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="font-medium text-colorBoldIndigo">
                              {user.ID_LOGIN}
                            </div>
                          </div>
                        </td>
                        <td className="p-2 whitespace-nowrap">
                          <div className="text-left">{user.ID_USUARIO}</div>
                        </td>

                        <td className="p-2 whitespace-nowrap">
                          <div className=" text-colorBoldIndigo text-center">
                            {user.ID_PLATAFORMA}
                          </div>
                        </td>
                        <td className="p-2 whitespace-nowrap">
                          <div className=" text-colorBoldIndigo text-center">
                            {user.LOGIN_USUARIO}
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <div className="flex justify-center mt-4">
              <button
                onClick={previousPage}
                disabled={currentPage === 1}
                className=" p-2  bg-indigo-500  text-white mr-2 hover:bg-indigo-100 ease-in-out"
              >
                Anterior
              </button>
              <button
                onClick={nextPage}
                className="p-2 bg-indigo-500 text-white  hover:bg-indigo-100 ease-in-out"
              >
                Próxima
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ListaLogin;
