import React, { useContext } from "react";
import { AuthContext } from "../../hooks/useAuthLogin";

function WelcomeBanner() {
  const { dados } = useContext(AuthContext);
  return (
    <div className="relative bg-indigo-200 p-4 sm:p-6 rounded-sm overflow-hidden mb-8">
      {/* Content */}
      <div className="relative">
        <h1 className="text-2xl md:text-3xl text-slate-800 font-bold mb-1">
          Seja bem vindo novamente. 👏
        </h1>
        <p>{dados.NOME}</p>
      </div>
    </div>
  );
}

export default WelcomeBanner;
