// HOOKS
import React, { useEffect, useState } from "react";
// COMPONENTS
import BarChart from "../../charts/BarChart01";
import Modal01 from "./modal/Modal01";
import ADM_RELATORIO_CALLINK from "../../utils/axiosbaseurl/ADMRELATORIOCALLINK";
import { tailwindConfig } from "../../utils/Utils";
// IMAGENS
import borislogoGradient from "../../images/borisImage/BorisLogoGradient.png";
// LIBS
import Modal from "react-modal";
import { BarLoader } from "react-spinners";
// ICONS
import { FcSearch } from "react-icons/fc";

function Relatorio02() {
  /* FUNÇÃO QUE GERA O RELATORIO & GRAFICO DE ACESSO AO CLIENTE */
  const [chartData, setChartData] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  useEffect(() => {
    async function fetchData() {
      try {
        const dados = {
          relatorio: "Acesso por Caminho",
          parametros: {
            ID_PERIODO: 7,
          },
        };

        const response = await ADM_RELATORIO_CALLINK.post("/", dados);
        const apiData = response.data;

        console.log(apiData);

        const filteredDataHoraHora = apiData.find(
          (item) => item.RESULTADO === "Hora Hora"
        );
        const filteredDataPagseguro = apiData.find(
          (item) => item.RESULTADO === "Pagseguro Televendas"
        );

        const formattedData = {
          labels: ["Hora Hora", "Pagseguro Televendas"],
          datasets: [
            {
              label: "Acesso por Caminho",
              data: [
                filteredDataHoraHora ? filteredDataHoraHora.QTD_ACESSO : 0,
                filteredDataPagseguro ? filteredDataPagseguro.QTD_ACESSO : 0,
              ],
              backgroundColor: [
                tailwindConfig().theme.colors.red[200],
                tailwindConfig().theme.colors.blue[200],
              ],
              hoverBackgroundColor: [
                tailwindConfig().theme.colors.red[200],
                tailwindConfig().theme.colors.blue[200],
              ],
              barPercentage: 0.85,
              categoryPercentage: 0.85,
            },
          ],
        };
        setChartData(formattedData);
      } catch (error) {
        console.log(`Não conseguimos processar sua requisição ${error}`);
      }
    }

    fetchData();
  }, []);
  /*******************************MODAL FUNCTIONS****************************** */
  function openModal() {
    setModalIsOpen(true);
  }
  function closeModal() {
    setModalIsOpen(false);
  }
  /****************************************************************** */
  return (
    <div className="flex flex-col col-span-full sm:col-span-6 bg-white shadow-lg rounded-md border border-slate-300 hover:scale-105">
      <header className="px-5 py-4 border-b border-slate-100 flex items-center justify-between">
        <h2 className="font-semibold text-xl text-gray-600 flex ">
          CAMINHOS MAIS ACESSADOS
        </h2>

        <button
          onClick={openModal}
          className="p-3 rounded text-white hover:bg-indigo-300 "
        >
          <FcSearch size={25} />
        </button>

        <p></p>
      </header>
      <Modal isOpen={modalIsOpen}>
        <button onClick={closeModal} className="p-2 bg-indigo-500 text-white">
          Fechar
        </button>
        <Modal01 />
      </Modal>
      {chartData ? (
        <BarChart data={chartData} width={595} height={248} />
      ) : (
        <div className="flex justify-center items-center h-full mt-5">
          <BarLoader color="#41A33E" loading={true} width={150} height={8} />
        </div>
      )}
      {chartData ? (
        <div className="flex border-t  bg-slate-200 justify-center mt-2 shadow-md">
          <img
            src={borislogoGradient}
            className="h-7 w-14 mt-3"
            alt="logo boris"
          />
          <span className=" text-gray-500 italic flex mt-3">
            <div className="h-3 w-3 rounded-full bg-blue-200 mt-2 ml-6"></div>
            <span className="text-gray-500 italic ">TEAMS</span>
          </span>
          <span className=" text-gray-500 italic flex mt-3">
            <div className="h-3 w-3 rounded-full bg-indigo-500 mt-2 ml-4"></div>
            <span className="text-gray-500 italic ">TELEGRAM</span>
          </span>
        </div>
      ) : (
        <p className="text-center">...</p>
      )}
    </div>
  );
}

export default Relatorio02;
