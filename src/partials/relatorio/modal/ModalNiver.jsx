import React, { useState } from "react";
import boris from "../../images/borisImage/BorisLogoGradient.png";
import { useForm } from "../../hooks/useFormHook";
import ADM_Gerenciamento from "../../utils/axiosbaseurl/ADMGERENCIAMENTO";
const ModalNiver = () => {
  const { form, onChangeForm, resetForm } = useForm({
    idUsuario: "",
    idPlataforma: "",
    loginUsuario: "",
    idChat: "",
  });

  const useEffect =
    (() => {
      createFormUserBoris();
    },
    []);

  const dados = {
    escolha: "login",
    processo: "criar",
    atributos: {
      ID_USUARIO: form.idUsuario,
      ID_PLATAFORMA: form.idPlataforma,
      LOGIN_USUARIO: form.loginUsuario,
      ID_CHAT: form.idChat,
    },
  };

  const createFormUserLogin = (event) => {
    event.preventDefault();
    ADM_Gerenciamento.post("/", dados)

      .then((response) => {
        const dados = response.data;
        console.log(dados);
        resetForm(form);
      })
      .catch((err) => console.log(err));
  };
  return (
    <>
      <div className="min-h-screen p-6 bg-gray-100 flex items-center justify-center">
        <div className="container max-w-screen-lg mx-auto">
          <div>
            <div className="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
              <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
                <div>
                  <div>
                    <img src={boris} alt="Logo Boris Gradient" />
                  </div>
                </div>

                <div className="lg:col-span-2">
                  <form
                    onSubmit={createFormUserLogin}
                    className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5"
                  >
                    <div className="md:col-span-2">
                      <label htmlFor="loginUsuario">Login usuário</label>
                      <input
                        type="text"
                        name="loginUsuario"
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                        value={form.loginUsuario}
                        required
                        onChange={onChangeForm}
                        placeholder="Digite o login do usuário"
                      />
                    </div>

                    <div className="md:col-span-1">
                      <label htmlFor="idPlataforma">ID Plataforma</label>
                      <input
                        name="idPlataforma"
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                        value={form.idPlataforma}
                        onChange={onChangeForm}
                        type="number"
                      />
                    </div>

                    <div className="md:col-span-1">
                      <label htmlFor="idUsuario">ID Usuário</label>
                      <input
                        name="idUsuario"
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                        value={form.idUsuario}
                        onChange={onChangeForm}
                        type="number"
                      />
                    </div>
                    <div className="md:col-span-1">
                      <label htmlFor="idChat">ID Chat</label>
                      <input
                        type="number"
                        name="idChat"
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                        value={form.idChat}
                        onChange={onChangeForm}
                        required
                      />
                    </div>
                    <div className="md:col-span-5 text-center mt-3">
                      <div className="inline-flex ">
                        <button
                          type="submit"
                          className="bg-indigo-500 hover:bg-indigo-400  ease-out text-white font-bold py-2 px-8 rounded"
                        >
                          CRIAR
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalNiver;
