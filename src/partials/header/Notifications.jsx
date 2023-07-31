//HOOKS
import React, { useState, useRef, useEffect } from "react";
// LIBS
import { Link } from "react-router-dom";

// COMPONENTES
import Transition from "../../utils/Transition";
import ADM_Gerenciamento from "../../utils/axiosbaseurl/ADMGERENCIAMENTO";

function Notifications() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const trigger = useRef(null);
  const dropdown = useRef(null);

  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (
        !dropdownOpen ||
        dropdown.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setDropdownOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });

  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!dropdownOpen || keyCode !== 27) return;
      setDropdownOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });

  const [niver, setNiver] = useState([]);
  const requestApi = {
    escolha: "info",
    processo: "aniversario",
  };

  useEffect(() => {
    pushNiver();
  }, []);

  const pushNiver = async () => {
    try {
      const response = await ADM_Gerenciamento.post("/", requestApi);
      const dados = response.data;
      setNiver(dados);
      console.log(dados);
    } catch (err) {
      console.log(err);
    }
  };

  let data = new Date();
  let dia = String(data.getDate()).padStart(2, 0);
  let mes = String(data.getMonth() + 1).padStart(2, 0);
  let ano = data.getFullYear();
  const dataAtual = dia + "/" + mes + "/" + ano;

  return (
    <div className="relative inline-flex mr-6 ">
      <button
        ref={trigger}
        className={`w-8 h-8 flex items-center justify-center bg-slate-100 hover:bg-slate-200 transition duration-150 rounded-full ${
          dropdownOpen && "bg-slate-200"
        }`}
        aria-haspopup="true"
        onClick={() => setDropdownOpen(!dropdownOpen)}
        aria-expanded={dropdownOpen}
      >
        <span className="sr-only">Notifications</span>
        <svg
          className="w-4 h-4"
          viewBox="0 0 16 16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            className="fill-current text-slate-500"
            d="M6.5 0C2.91 0 0 2.462 0 5.5c0 1.075.37 2.074 1 2.922V12l2.699-1.542A7.454 7.454 0 006.5 11c3.59 0 6.5-2.462 6.5-5.5S10.09 0 6.5 0z"
          />
          <path
            className="fill-current text-slate-400"
            d="M16 9.5c0-.987-.429-1.897-1.147-2.639C14.124 10.348 10.66 13 6.5 13c-.103 0-.202-.018-.305-.021C7.231 13.617 8.556 14 10 14c.449 0 .886-.04 1.307-.11L15 16v-4h-.012C15.627 11.285 16 10.425 16 9.5z"
          />
        </svg>
        <div className="absolute top-0 right-0 w-2.5 h-2.5 bg-rose-500 border-2 border-white rounded-full"></div>
      </button>

      <Transition
        className="origin-top-right z-10 absolute top-full right-0 -mr-48 sm:mr-0 min-w-80 bg-white border border-slate-200 py-1.5 rounded shadow-lg overflow-hidden mt-1"
        show={dropdownOpen}
        enter="transition ease-out duration-200 transform"
        enterStart="opacity-0 -translate-y-2"
        enterEnd="opacity-100 translate-y-0"
        leave="transition ease-out duration-200"
        leaveStart="opacity-100"
        leaveEnd="opacity-0"
      >
        <div
          ref={dropdown}
          onFocus={() => setDropdownOpen(true)}
          onBlur={() => setDropdownOpen(false)}
          className=" max-h-72 overflow-y-auto p-4"
        >
          <div className="text-xs font-semibold text-slate-400 uppercase pt-1.5 pb-2 px-4">
            Avisos
          </div>
          <ul className="overflow-auto">
            <li className="border-b border-slate-200 last:border-0">
              <div
                className="block py-2 px-4 hover:bg-slate-50"
                onClick={() => setDropdownOpen(!dropdownOpen)}
              >
                <span className=" block text-sm mb-2">
                  📣{" "}
                  <span className="font-medium text-slate-800 text-center text-xl  ">
                    Notificações de hoje
                  </span>{" "}
                  <br />
                  {niver ? (
                    <div className="mt-4 ">
                      {niver.map((item, index) => (
                        <div
                          key={index}
                          className=" bg-gray-900 flex items-center justify-center mb-6"
                        >
                          <div className="relative w-64">
                            <div className="absolute -right-4 -bottom-4 bg-indigo-200 h-full w-full rounded-xl"></div>

                            <div className="relative bg-gray-800 text-gray-50 rounded-xl p-8 space-y-4">
                              <div className="h-2 w-20 bg-indigo-200 "></div>

                              <div className="text-xl font-extrabold text-white">
                                Aniversariante 🥳
                              </div>
                              <p>{item.NOME}</p>
                              <p className="text-xs  text-gray-400">
                                ESTÁ COMPLETANDO: {item.IDADE} ANOS
                              </p>
                              <p className="text-xs  text-gray-400">
                                DEPARTAMENTO: {item.DEPARTAMENTO}
                              </p>
                              <p className="text-xs  text-gray-400">
                                LOGIN_USUARIO: {item.LOGIN_USUARIO}
                              </p>

                              <Link
                                to={"/alertas"}
                                className=" text-indigo-400 font-bold tracking-wide flex"
                              >
                                <span>Desejar Parabéns</span>
                                <svg
                                  className="w-4 h-4 ml-2"
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                                  />
                                </svg>
                              </Link>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p></p>
                  )}
                </span>

                <span className=" text-xs font-medium flex  justify-end text-slate-400 mt-6">
                  {dataAtual}
                </span>
              </div>
            </li>
          </ul>
        </div>
      </Transition>
    </div>
  );
}

export default Notifications;
