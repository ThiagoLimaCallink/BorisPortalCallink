import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import Sidebar from "../partials/Sidebar";
import Header from "../partials/Header";
import ADM_Gerenciamento from "../utils/axiosbaseurl/ADMGERENCIAMENTO";

const ListarPerfil = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [userList, setUserlist] = useState([]);

  const requestApi = {
    escolha: "perfil",
    processo: "leitura",
  };
  ("");

  useEffect(() => {
    handleList();
  }, []);

  const handleList = async () => {
    try {
      const response = await ADM_Gerenciamento.post("/", requestApi);
      const dados = response.data;
      setUserlist(dados);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Helmet>
        <title>Boris Portal Listar Perfil</title>
      </Helmet>
      <div className="flex h-screen overflow-hidden">
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
          <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

          <div className="col-span-full xl:col-span-6 bg-white shadow-lg rounded-sm border border-slate-200">
            <header className="px-5 py-4  border-slate-100">
              <h2 className="font-semibold text-xl text-colorBoldIndigo text-center">
                LISTA DE PERFIL
              </h2>
            </header>
            <div className="p-3">
              {/* Table */}
              <div className="overflow-x-auto">
                <table className="table-auto w-full ">
                  {/* Table header */}
                  <thead className="text-xs font-semibold uppercase text-slate-400 bg-slate-50">
                    <tr>
                      <th className="p-2 whitespace-nowrap">
                        <div className="font-semibold text-left">NIVEL</div>
                      </th>
                      <th className="p-2 whitespace-nowrap">
                        <div className="font-semibold text-left">ID_PERFIL</div>
                      </th>

                      <th className="p-2 whitespace-nowrap">
                        <div className="font-semibold text-center">
                          NOME_PERFIL
                        </div>
                      </th>
                      <th className="p-2 whitespace-nowrap">
                        <div className="font-semibold text-center">
                          FLG_ATIVO
                        </div>
                      </th>
                    </tr>
                  </thead>
                  {/* Table body */}
                  <tbody className="text-sm divide-y divide-slate-400">
                    {userList.map((user, index) => (
                      <tr key={index}>
                        <td className="p-2 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="font-medium text-colorBoldIndigo">
                              {user.NIVEL}
                            </div>
                          </div>
                        </td>
                        <td className="p-2 whitespace-nowrap">
                          <div className="text-left">{user.ID_PERFIL}</div>
                        </td>

                        <td className="p-2 whitespace-nowrap">
                          <div className=" text-colorBoldIndigo text-center">
                            {user.NOME_PERFIL}
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
          </div>
        </div>
      </div>
    </>
  );
};

export default ListarPerfil;
