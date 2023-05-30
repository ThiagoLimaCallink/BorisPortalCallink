import React from "react";
import workingBoris from "../../images/borisImage/Workingboris.gif";
function DashboardCard03() {
  return (
    <div className="flex flex-col col-span-full sm:col-span-6 xl:col-span-4 bg-white shadow-lg rounded-sm border border-slate-200 hover:scale-105">
      <div className="px-5 pt-5">
        <header className="flex justify-between items-start mb-2">
          {/* Icon */}
          <img
            src={workingBoris}
            width="100"
            height="100"
            alt="Imagem do Boris Alerta"
          />
        </header>
        <h2 className="text-lg font-semibold text-slate-800 mb-2">
          Estamos Trabalhando para trazer a melhor solução
        </h2>
        <div className="text-xs font-semibold text-slate-400 uppercase mb-1">
          Em fase de construção
        </div>
      </div>
    </div>
  );
}

export default DashboardCard03;
