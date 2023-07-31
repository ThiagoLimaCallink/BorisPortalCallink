/** HOOKS DO REACT  */
import React, { useState, useEffect } from "react";
import useSWR from "swr";
//COMPONENTS
import ADM_RELATORIO_CALLINK from "../../utils/axiosbaseurl/ADMRELATORIOCALLINK";
// LIBS
import { BarLoader } from "react-spinners";

/* RENDERIZY LIST AND USERS  THIAGO LIMA */
const Relatorio02 = () => {
  const [name, setName] = useState("");
  const [currentPages, setCurrentPages] = useState(1);
  const [selectedOption, setSelectedOption] = useState("");

  /**BODY DA API */

  const requestApi = {
    relatorio: "Acesso por Caminho",
    parametros: {
      ID_PERIODO: 7,
    },
  };
  ("");

  const fetcher = async () => {
    try {
      const response = await ADM_RELATORIO_CALLINK.post("/", requestApi);
      return response.data;
    } catch (error) {
      throw new Error(error.message);
    }
  };

  /* TEST */
  const { data, error } = useSWR(
    "https://southamerica-east1-biclk-203418.cloudfunctions.net/Gera_Relatorio_Callink",
    fetcher
  );

  const userList = data;

  if (error) {
    return <div>Error loading data</div>;
  }

  if (!data) {
    return (
      <div className="flex justify-center items-center h-full mt-5   ">
        <BarLoader color="#41A33E" loading={true} width={150} height={8} />
      </div>
    );
  }

  const handleFilterName = (user, isSearchClicked) => {
    if (!isSearchClicked) {
      return true;
    }
    const userNome = user?.RESULTADO ?? "";
    return userNome.toLowerCase().includes(name.toLowerCase());
  };

  const handleFilterPeriodo = (user, isSearchClicked) => {
    if (!isSearchClicked || selectedOption === "") {
      return true;
    }
    const userPeriodo = user?.PERIODO ?? "";
    return userPeriodo.toLowerCase().includes(selectedOption.toLowerCase());
  };

  /* PAGINAÇÃO */

  const handlePageChange = (pageNumber) => {
    setCurrentPages(pageNumber);
  };

  const pages = 20;
  const firstItemIndex = (currentPages - 1) * pages;
  /*************************************** */

  return (
    <>
      <div className="flex flex-col col-span-full sm:col-span-6 bg-white shadow-lg rounded-md border border-slate-300 hover:scale-105">
        <header className="px-5 py-4 border-b border-slate-100 flex items-center justify-between"></header>
        <div>
          <div className=" overflow-y-auto overflow-x-hidden h-80 ">
            <div>
              <header className="px-5 py-4  border-slate-100">
                <h2 className="font-semibold text-colorBoldIndigo text-center">
                  LISTA DOS CAMINHOS MAIS ACESSADOS
                </h2>
              </header>
              <div>
                <div className="font-sans text-black  bg-white flex items-center justify-center">
                  <div className="border rounded overflow-hidden flex ">
                    <input
                      type="text"
                      className="px-4 py-2 outline border-none "
                      placeholder="Pesquisar Resultado"
                      value={name}
                      onChange={(e) => {
                        setName(e.target.value);
                      }}
                    />
                  </div>
                  <select
                    name=""
                    id=""
                    className="ml-4"
                    value={selectedOption}
                    onChange={(e) => setSelectedOption(e.target.value)}
                  >
                    <option value=""></option>
                    <option value="Hoje">Hoje</option>
                    <option value="Ontem">Ontem</option>
                    <option value="Esta semana">Esta semana</option>
                    <option value="Mês anterior">Mês anterior</option>
                    <option value="Este mês">Este mês</option>
                  </select>
                </div>

                <p className="text-center text-gray-500 mt-2">
                  Faça sua consulta baseada no 'RESULTADO' 🔍
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
                          <div className="font-semibold text-left">
                            RESULTADO
                          </div>
                        </th>
                        <th className="p-2 whitespace-nowrap">
                          <div className="font-semibold CENTER">QTD_ACESSO</div>
                        </th>

                        <th className="p-2 whitespace-nowrap">
                          <div className="font-semibold text-center">
                            PERIODO
                          </div>
                        </th>
                      </tr>
                    </thead>
                    {/* Table body */}
                    <tbody className="text-sm divide-y divide-slate-400">
                      {userList
                        .filter(handleFilterName)
                        .filter(handleFilterPeriodo)
                        .slice(firstItemIndex, firstItemIndex + pages)
                        .map((user, index) => (
                          <tr key={index}>
                            <td className="p-2 whitespace-nowrap">
                              <div className="flex items-center">
                                <div className="font-medium text-colorBoldIndigo">
                                  {user.RESULTADO}
                                </div>
                              </div>
                            </td>
                            <td className="p-2 whitespace-nowrap">
                              <div className="text-center">
                                {user.QTD_ACESSO}
                              </div>
                            </td>

                            <td className="p-2 whitespace-nowrap">
                              <div className=" text-colorBoldIndigo text-center">
                                {user.PERIODO}
                              </div>
                            </td>
                            <td className="p-2 whitespace-nowrap">
                              <div className=" text-colorBoldIndigo text-center">
                                {user.QTD_ACESSO_TEAMS}
                              </div>
                            </td>
                          </tr>
                        ))}
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="flex justify-between mx-4 mb-4 ">
                <button
                  className="bg-indigo-500 hover:bg-indigo-400  ease-out text-white font-bold py-2 px-8 rounded "
                  onClick={() => handlePageChange(currentPages - 1)}
                  disabled={currentPages === 1}
                >
                  Voltar
                </button>
                <button
                  className="bg-indigo-500  hover:bg-indigo-400  ease-out text-white font-bold py-2 px-8 rounded"
                  onClick={() => handlePageChange(currentPages + 1)}
                  disabled={currentPages === 65}
                >
                  Avançar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Relatorio02;
