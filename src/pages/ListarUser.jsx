/** HOOKS DO REACT  */
import React, { useState, useEffect } from "react";
/* TITLE REACT PAGE */
import { Helmet } from "react-helmet";
/* COMPONENTS */
import Sidebar from "../partials/Sidebar";
import Header from "../partials/Header";
/* AXIOS POST */
import ADM_Gerenciamento from "../utils/axiosbaseurl/ADMGERENCIAMENTO";

/* RENDERIZy LIST AND USERS  THIAGO LIMA */
const ListarUser = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [userList, setUserlist] = useState([]);
  const [searchItem, setSearchItem] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(15);
  const [searchClicked, setSearchClicked] = useState(false);

  /**BODY DA API */

  const requestApi = {
    escolha: "usuario",
    processo: "leitura",
  };
  ("");

  /**HOOK REQUEST AUTOPLAY  API */

  useEffect(() => {
    handleList();
  }, [currentPage, itemsPerPage]);

  /**FUNCTION POST API THIAGO LIMA */
  const handleList = async () => {
    try {
      const response = await ADM_Gerenciamento.post("/", requestApi);
      const dados = response.data;
      const startIndex = (currentPage - 1) * itemsPerPage;
      const endIndex = startIndex + itemsPerPage;
      const pagedUserList = dados.slice(startIndex, endIndex);
      setUserlist(pagedUserList);
    } catch (err) {
      console.log(err);
    }
  };

  /********************************************* */

  /**NEXT PAGE FUNCTION THIAGO LIMA */

  const nextPage = () => {
    if (currentPage < itemsPerPage) {
      setCurrentPage((prevPage) => prevPage + 1);

      /** LOCALIZA NA URL PAGINA QUE USUÁRIO ESTA NO MOMENTO THIAGO LIMA */

      const url = new URL(window.location.href);
      url.searchParams.set("page", currentPage + 1);
      window.history.pushState({}, "", url);
    } else {
      setCurrentPage(1);

      /** LOCALIZA NA URL PAGINA QUE USUÁRIO ESTA NO MOMENTO THIAGO LIMA */

      const url = new URL(window.location.href);
      url.searchParams.delete("page");
      window.history.pushState({}, "", url);

      console.log("Estou caindo aqui");
    }
  };
  /********************************************* */

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
    return true; // Retorna true por padrão se o botão de busca não foi clicado
  };

  return (
    <>
      <Helmet>
        <title>Boris Portal Listar Usuários</title>
      </Helmet>
      <div className="flex h-screen overflow-hidden">
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
          <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

          <div className="col-span-full xl:col-span-6 bg-white shadow-lg rounded-sm border border-slate-200">
            <header className="px-5 py-4  border-slate-100">
              <h2 className="font-semibold text-colorBoldIndigo text-center">
                LISTA DE USUÁRIOS
              </h2>
            </header>
            <div>
              <div class="font-sans text-black  bg-white flex items-center justify-center">
                <div class="border rounded overflow-hidden flex">
                  <input
                    type="text"
                    class="px-4 py-2"
                    placeholder="Pesquisar usuário"
                    value={searchItem}
                    onChange={(e) => setSearchItem(e.target.value)}
                  />
                  <button
                    onClick={() => setSearchClicked(true)}
                    class="flex items-center justify-center px-4 border-l hover:bg-indigo-200 "
                  >
                    <svg
                      class="h-4 w-4 text-grey-dark"
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
                Faça sua consulta baseada em 'NOME' , 'ID_USUARIO' ,
                'ID_CALLINK', 'EMAIL' 🔍
              </p>
            </div>
            <div className="p-3">
              {/* Table */}
              <div className="overflow-x-auto">
                <table className="table-auto w-full ">
                  {/* Table header */}
                  <thead className="text-xs font-semibold uppercase text-slate-400 bg-slate-50">
                    <tr>
                      <th className="p-2 whitespace-nowrap">
                        <div className="font-semibold text-left">ID</div>
                      </th>
                      <th className="p-2 whitespace-nowrap">
                        <div className="font-semibold text-left">
                          ID EMPRESA
                        </div>
                      </th>

                      <th className="p-2 whitespace-nowrap">
                        <div className="font-semibold text-center">NOME</div>
                      </th>
                      <th className="p-2 whitespace-nowrap">
                        <div className="font-semibold text-center">
                          ID_PERFIL
                        </div>
                      </th>
                      <th className="p-2 whitespace-nowrap">
                        <div className="font-semibold text-center">
                          ID_ACESSO
                        </div>
                      </th>
                      <th className="p-2 whitespace-nowrap">
                        <div className="font-semibold text-center">
                          TELEFONE
                        </div>
                      </th>
                      <th className="p-2 whitespace-nowrap">
                        <div className="font-semibold text-center">
                          DEPARTAMENTO
                        </div>
                      </th>
                      <th className="p-2 whitespace-nowrap">
                        <div className="font-semibold text-center">E-MAIL</div>
                      </th>
                      <th className="p-2 whitespace-nowrap">
                        <div className="font-semibold text-center">
                          DATA NASCIMENTO
                        </div>
                      </th>
                      <th className="p-2 whitespace-nowrap">
                        <div className="font-semibold text-center">
                          VALIDAÇÃO ESCALA
                        </div>
                      </th>
                      <th className="p-2 whitespace-nowrap">
                        <div className="font-semibold text-center">
                          ATIVO NA PLATAFORMA
                        </div>
                      </th>
                      <th className="p-2 whitespace-nowrap">
                        <div className="font-semibold text-center">
                          FLAG_ATIVO
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
                              {user.ID_USUARIO}
                            </div>
                          </div>
                        </td>
                        <td className="p-2 whitespace-nowrap">
                          <div className="text-left">{user.ID_CALLINK}</div>
                        </td>

                        <td className="p-2 whitespace-nowrap">
                          <div className=" text-colorBoldIndigo text-center">
                            {user.NOME}
                          </div>
                        </td>
                        <td className="p-2 whitespace-nowrap">
                          <div className=" text-colorBoldIndigo text-center">
                            {user.ID_PERFIL}
                          </div>
                        </td>
                        <td className="p-2 whitespace-nowrap">
                          <div className=" text-colorBoldIndigo text-center">
                            {user.ID_ACESSO}
                          </div>
                        </td>
                        <td className="p-2 whitespace-nowrap">
                          <div className=" text-colorBoldIndigo text-center">
                            {user.TELEFONE}
                          </div>
                        </td>
                        <td className="p-2 whitespace-nowrap">
                          <div className=" text-colorBoldIndigo text-center">
                            {user.DEPARTAMENTO}
                          </div>
                        </td>
                        <td className="p-2 whitespace-nowrap">
                          <div className=" text-colorBoldIndigo text-center">
                            {user.EMAIL}
                          </div>
                        </td>
                        <td className="p-2 whitespace-nowrap">
                          <div className=" text-colorBoldIndigo text-center">
                            {user.DAT_NASCIMENTO}
                          </div>
                        </td>
                        <td className="p-2 whitespace-nowrap">
                          <div className=" text-colorBoldIndigo text-center">
                            {user.DAT_NASCIMENTO}
                          </div>
                        </td>
                        <td className="p-2 whitespace-nowrap">
                          <div className=" text-colorBoldIndigo text-center">
                            {user.FLG_VALIDA_ESCALA}
                          </div>
                        </td>
                        <td className="p-2 whitespace-nowrap">
                          <div className=" text-colorBoldIndigo text-center">
                            {user.FLG_ATIVO}
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

export default ListarUser;
