import React from "react";
import LineChart from "../../charts/LineChart02";
import { useEffect, useState } from "react";
// Import utilities
import { tailwindConfig } from "../../utils/Utils";

function Relatorio04() {
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
            // Indigo line
            {
              label: "Current",
              data: apiData.map((item) => item.nome),
              borderColor: tailwindConfig().theme.colors.indigo[500],
              fill: false,
              borderWidth: 2,
              tension: 0,
              pointRadius: 0,
              pointHoverRadius: 3,
              pointBackgroundColor: tailwindConfig().theme.colors.indigo[500],
            },
            // Blue line
            {
              label: "Previous",
              data: apiData.map((item) => item.nome),
              borderColor: tailwindConfig().theme.colors.blue[400],
              fill: false,
              borderWidth: 2,
              tension: 0,
              pointRadius: 0,
              pointHoverRadius: 3,
              pointBackgroundColor: tailwindConfig().theme.colors.blue[400],
            },
            // Green line
            {
              label: "Average",
              data: apiData.map((item) => item.nome),
              borderColor: tailwindConfig().theme.colors.green[500],
              fill: false,
              borderWidth: 2,
              tension: 0,
              pointRadius: 0,
              pointHoverRadius: 3,
              pointBackgroundColor: tailwindConfig().theme.colors.green[500],
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
          Analítico de Alertas
        </h2>
        <button className="p-3 rounded bg-indigo-500 text-white hover:bg-indigo-100">
          VER RELÁTORIO COMPLETO
        </button>
      </header>
      {chartData ? (
        <LineChart data={chartData} width={595} height={248} />
      ) : (
        <p>Carregando Gráfico</p>
      )}
    </div>
  );
}

export default Relatorio04;
