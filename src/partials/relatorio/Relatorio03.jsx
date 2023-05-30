import React, { useEffect, useState } from "react";
import BarChart from "../../charts/BarChart01";

// Import utilities
import { tailwindConfig } from "../../utils/Utils";

function Relatorio03() {
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    async function fechData() {
      try {
        const dados = {
          escolha: "Analítico Usuários",
          parametros: {
            ID_PERIODO: 1,
          },
        };

        const response = await axios.post(
          "https://southamerica-east1-biclk-203418.cloudfunctions.net/Gera_Relatorio_Callink",
          dados
        );
        console.log(response);
        const apiData = response.data;

        const formattedData = {
          labels: apiData.map((item) => item.nome),
          datasets: [
            // Light blue bars
            {
              label: "Direct",
              data: apiData.map((item) => item.nome),
              backgroundColor: tailwindConfig().theme.colors.blue[400],
              hoverBackgroundColor: tailwindConfig().theme.colors.blue[500],
              barPercentage: 0.66,
              categoryPercentage: 0.66,
            },
            // Blue bars
            {
              label: "Indirect",
              data: apiData.map((item) => item.nome),
              backgroundColor: tailwindConfig().theme.colors.indigo[500],
              hoverBackgroundColor: tailwindConfig().theme.colors.indigo[600],
              barPercentage: 0.66,
              categoryPercentage: 0.66,
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
        <h2 className="font-semibold text-xl text-slate-800">Campanhas</h2>
        <button className="p-3 rounded bg-indigo-500 text-white hover:bg-indigo-100">
          VER RELÁTORIO COMPLETO
        </button>
      </header>
      {/* Chart built with Chart.js 3 */}
      {/* Change the height attribute to adjust the chart height */}
      {chartData ? (
        <BarChart data={chartData} width={595} height={248} />
      ) : (
        <p>Carregando gráficos</p>
      )}
    </div>
  );
}

export default Relatorio03;
