import React from "react";
import borisAlert from "../../images/borisImage/borisAlert.png";
import { Link } from "react-router-dom";

function DashboardCard01() {
  return (
    <Link
      to={"/alerta"}
      className="flex flex-col col-span-full sm:col-span-6 xl:col-span-4 bg-white shadow-lg rounded-sm border border-slate-200 hover:scale-105"
    >
      <div className="px-5 pt-5">
        <header className="flex justify-between items-start mb-2">
          {/* Icon */}
          <img
            src={borisAlert}
            width="100"
            height="100"
            alt="Imagem do Boris Alerta"
          />
        </header>
        <h2 className="text-lg font-semibold text-slate-800 mb-2">
          Alerta Boris
        </h2>
        <div className="text-xs font-semibold text-slate-400 uppercase mb-1">
          Mensagem rápida para qualquer usuário
        </div>
      </div>
    </Link>
  );
}

export default DashboardCard01;
