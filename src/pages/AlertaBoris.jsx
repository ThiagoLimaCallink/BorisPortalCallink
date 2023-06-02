//HHOKS
import React, { useState } from "react";
// AXIOS
import axios from "axios";
// IMAGENS
import borisAlertV1 from "../images/borisImage/borisAlertV1.png";
// TITLE
import { Helmet } from "react-helmet";
// COMPONENT
import Sidebar from "../partials/Sidebar";
import Header from "../partials/Header";

const AlertaBoris = () => {
  // END POINT DE ALERTA
  const [username, setUsername] = useState("");
  const [text, setText] = useState("");
  const [message, setMessage] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const body = {
    username,
    text,
  };

  const handleMessage = (e) => {
    e.preventDefault();

    axios
      .post(
        "https://southamerica-east1-boris-callink.cloudfunctions.net/teste",
        body
      )

      .then((response) => {
        console.log(response.data);
        if (response.data.STATUS === true) {
          setMessage("Mensagem enviada com sucesso!");
          setUsername("");
          setText("");
          setTimeout(() => {
            setMessage("");
          }, 10000);
        } else {
          setMessage("A mensagem não foi enviada.");
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <Helmet>
        <title>Alerta Boris</title>
      </Helmet>
      <div className="flex h-screen overflow-hidden">
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
          <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
          <main className="bg-slate-100">
            <div className=" flex items-center justify-center ">
              <div className="w-10/12 lg:w-9/12 xl:w-10/12 flex  justify-center">
                <div className=" relative w-full lg:w-1/2 bg-slate-200 rounded-lg lg:rounded-l-none py-24 px-12 shadow-md">
                  <div>
                    <img
                      src={borisAlertV1}
                      alt="Imagem do Boris Robo Logo"
                      className="w-72"
                    />
                  </div>
                  <form className=" w-full" onSubmit={handleMessage}>
                    <div className="mb-4">
                      <label
                        className="block mb-2 text-sm font-bold"
                        htmlFor="username"
                      >
                        Usuario
                      </label>
                      <input
                        type="text"
                        id="username"
                        className="w-full p-3 text-md border rounded shadow  focus:outline-none focus:shadow-outline  "
                        placeholder="Usuário"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                      />
                    </div>
                    <div className="mb-4">
                      <label className="block mb-2 text-sm font-bold">
                        Messagem
                      </label>
                      <textarea
                        id="message"
                        className="w-full p-3 text-md border rounded shadow focus:outline-none focus:shadow-outline "
                        placeholder="Digite sua mensagem"
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                      />
                    </div>
                    <div className="mb-4">
                      <button
                        className="w-full p-3 font-bold text-white bg-indigo-500 hover:bg-indigo-200 focus:outline-none"
                        type="submit"
                      >
                        Enviar
                      </button>
                    </div>
                    <hr className="mb-4 border-t" />
                  </form>
                  {message && (
                    <p className="text-center bg-green-200 p-2 mb-5 flex flex-col">
                      {message}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default AlertaBoris;
