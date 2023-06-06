// HOOKS
import React, { useEffect, useState } from "react";
// COMPONENTS
import BarChart from "../../charts/BarChart01";

import ADM_RELATORIO_CALLINK from "../../utils/axiosbaseurl/ADMRELATORIOCALLINK";
import { tailwindConfig } from "../../utils/Utils";
// IMAGENS
import borislogoGradient from "../../images/borisImage/BorisLogoGradient.png";

import { BarLoader } from "react-spinners";
// ICONS

function Relatorio01() {
  /* FUNÇÃO QUE GERA O RELATORIO & GRAFICO DE ACESSO AO CLIENTE */
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    async function fechData() {
      try {
        const dados = {
          relatorio: "Analítico Usuários",
          parametros: {
            ID_PERIODO: 7,
          },
        };

        const response = await ADM_RELATORIO_CALLINK.post("/", dados);
        const apiData = response.data;
        const apiDataTeams = apiData.filter(
          (item) => item.QTD_ACESSO_TEAMS > 5
        );

        const apiDataTelegram = apiData.filter(
          (item) => item.QTD_ACESSO_TELEGRAM > 5
        );

        const formattedData = {
          labels: apiDataTeams.map((item) => item.NOME),
          datasets: [
            // Light blue bars
            {
              label: "TEAMS",
              data: apiDataTeams.map((item) => item.QTD_ACESSO_TEAMS),
              backgroundColor: tailwindConfig().theme.colors.blue[200],
              hoverBackgroundColor: tailwindConfig().theme.colors.blue[200],
              barPercentage: 0.85,
              categoryPercentage: 0.85,
            },
            // Blue bars
            {
              label: "TELEGRAM",
              data: apiDataTelegram.map((item) => item.QTD_ACESSO_TELEGRAM),
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

  /****************************************************************** */
  return (
    <div className="flex flex-col col-span-full sm:col-span-6 bg-white shadow-lg rounded-md border border-slate-300 hover:scale-105">
      <header className="px-5 py-4 border-b border-slate-100 flex items-center justify-between">
        <h2 className="font-semibold text-xl text-gray-600 flex ">
          TOP USUÁRIOS MENSAL
        </h2>
      </header>

      {chartData ? (
        <BarChart data={chartData} width="100%" height={248} />
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

export default Relatorio01;
