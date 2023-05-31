import React, { useEffect, useState } from "react";
import BarChart from "../../charts/BarChart01";
import axios from "axios";
import borislogoGradient from "../../images/borisImage/BorisLogoGradient.png";
import Modal01 from "./modal/Modal01";
import Modal from "react-modal";
// Import utilities
import { tailwindConfig } from "../../utils/Utils";
import { FcSearch } from "react-icons/fc";

function Relatorio01() {
  const [chartData, setChartData] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  useEffect(() => {
    async function fechData() {
      try {
        const dados = {
          relatorio: "Analítico Usuários",
          parametros: {
            ID_PERIODO: 6,
          },
        };

        const response = await axios.post(
          "https://southamerica-east1-biclk-203418.cloudfunctions.net/Gera_Relatorio_Callink",
          dados
        );
        const apiData = response.data;

        const filteredData = apiData.filter(
          (item) => item.QTD_ACESSO_TEAMS > 10
        );

        const formattedData = {
          labels: filteredData.map((item) => item.NOME),
          datasets: [
            // Light blue bars
            {
              label: "TEAMS",
              data: filteredData.map((item) => item.QTD_ACESSO_TEAMS),
              backgroundColor: tailwindConfig().theme.colors.blue[200],
              hoverBackgroundColor: tailwindConfig().theme.colors.blue[200],
              barPercentage: 0.85,
              categoryPercentage: 0.85,
            },
            // Blue bars
            {
              label: "TELEGRAM",
              data: filteredData.map((item) => item.QTD_ACESSO_TELEGRAM),
              backgroundColor: tailwindConfig().theme.colors.indigo[500],
              hoverBackgroundColor: tailwindConfig().theme.colors.indigo[600],
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
    fechData();
  }, []);

  function openModal() {
    setModalIsOpen(true);
  }
  function closeModal() {
    setModalIsOpen(false);
  }

  return (
    <div className="flex flex-col col-span-full sm:col-span-6 bg-white shadow-lg rounded-sm border border-slate-200 hover:scale-105">
      <header className="px-5 py-4 border-b border-slate-100 flex items-center justify-between">
        <h2 className="font-semibold text-xl text-slate-800">
          TOP USUÁRIOS MENSAL
        </h2>

        {chartData ? (
          <button
            onClick={openModal}
            className="p-3 rounded text-white hover:bg-indigo-300"
          >
            <FcSearch size={25} />
          </button>
        ) : (
          <p></p>
        )}
      </header>
      <Modal isOpen={modalIsOpen}>
        <button onClick={closeModal} className="p-2 bg-indigo-500 text-white">
          Fechar
        </button>
        <Modal01 />
      </Modal>
      {/* Chart built with Chart.js 3 */}
      {/* Change the height attribute to adjust the chart height */}
      {chartData ? (
        <BarChart data={chartData} width={595} height={248} />
      ) : (
        <p className="text-center mt-5 text-xl">Carregando gráficos</p>
      )}
      {chartData ? (
        <div className="flex border-t  ml-6 text-red-600 justify-center mt-2">
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

export default Relatorio01;
