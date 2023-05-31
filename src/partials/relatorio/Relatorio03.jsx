import React, { useEffect, useState } from "react";
import BarChart from "../../charts/BarChart01";
import axios from "axios";

// Import utilities
import { tailwindConfig } from "../../utils/Utils";
import { FcSearch } from "react-icons/fc";

function Relatorio03() {
  const [chartData, setChartData] = useState(null);
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
        console.log(apiData);

        const filteredData = apiData.filter(
          (item) => item.QTD_ACESSO_TEAMS > 10
        );
        console.log(filteredData);
        const formattedData = {
          labels: filteredData.map((item) => item.NOME),
          datasets: [
            // Light blue bars
            {
              label: "TEAMS",
              data: filteredData.map((item) => item.QTD_ACESSO_TEAMS),
              backgroundColor: tailwindConfig().theme.colors.blue[400],
              hoverBackgroundColor: tailwindConfig().theme.colors.blue[500],
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

  return (
    <div className="flex flex-col col-span-full sm:col-span-6 bg-white shadow-lg rounded-sm border border-slate-200 hover:scale-105">
      <header className="px-5 py-4 border-b border-slate-100 flex items-center justify-between">
        <h2 className="font-semibold text-xl text-slate-800">
          TOP USUÁRIOS MENSAL
        </h2>

        <button className="p-3 rounded text-white hover:bg-indigo-300">
          <FcSearch size={25} />
        </button>
      </header>
      {/* Chart built with Chart.js 3 */}
      {/* Change the height attribute to adjust the chart height */}
      {chartData ? (
        <BarChart data={chartData} width={595} height={248} />
      ) : (
        <p className="text-center mt-5 text-xl">Carregando gráficos</p>
      )}
      {chartData ? (
        <p className="text-center italic text-gray-500">
          Top acesso Boris Mensal
        </p>
      ) : (
        <p className="text-center">...</p>
      )}
    </div>
  );
}

export default Relatorio03;
