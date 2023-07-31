import React, { useState } from "react";
import boris from "../../images/borisImage/BorisLogoGradient.png";
import { useForm } from "../../hooks/useFormHook";
import ADM_Gerenciamento from "../../utils/axiosbaseurl/ADMGERENCIAMENTO";
import Modal from "react-modal";
const FormCreateLogin = () => {
  const { form, onChangeForm, resetForm } = useForm({
    idUsuario: "",
    idPlataforma: "",
    loginUsuario: "",
    idChat: "",
  });

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

        resetForm(form);
        closeModal();
      })
      .catch((err) => console.log(err));
  };

  const [modalIsOpen, setModalIsOpen] = useState(false);

  function openModal(e) {
    e.preventDefault();
    setModalIsOpen(true);
  }
  function closeModal() {
    setModalIsOpen(false);
  }
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
                  <p className="mt-6 text-colorBoldIndigo text-xl">
                    ❝ Atenção ao criar Login do Usuário, revise todos os campos
                    antes de enviar.❞
                  </p>
                  <p>Boris 🤗</p>
                </div>

                <div className="lg:col-span-2">
                  <form
                    onSubmit={openModal}
                    className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5"
                  >
                    <div className="md:col-span-1 ">
                      <label htmlFor="idUsuario">ID_USUÁRIO</label>
                      <input
                        name="idUsuario"
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50 text-center"
                        value={form.idUsuario}
                        onChange={onChangeForm}
                        type="number"
                      />
                    </div>
                    <div className="md:col-span-1">
                      <label htmlFor="idPlataforma">ID_PLATAFORMA</label>
                      <input
                        name="idPlataforma"
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50 text-center"
                        value={form.idPlataforma}
                        onChange={onChangeForm}
                        type="number"
                      />
                    </div>

                    <div className="md:col-span-2">
                      <label htmlFor="loginUsuario">LOGIN_USUARIO</label>
                      <input
                        type="text"
                        name="loginUsuario"
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50 text-center"
                        value={form.loginUsuario}
                        required
                        onChange={onChangeForm}
                        placeholder="Digite o Login do Usuário"
                      />
                    </div>

                    <div className="md:col-span-1">
                      <label htmlFor="idChat">ID_CHAT</label>
                      <input
                        type="number"
                        name="idChat"
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50 text-center"
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
                <Modal isOpen={modalIsOpen}>
                  <div className="p-3 ">
                    {/* Table */}
                    <div className="overflow-x-auto">
                      <table className="table-auto w-full ">
                        {/* Table header */}
                        <thead className="text-xs font-semibold uppercase text-slate-400 bg-slate-50">
                          <tr>
                            <th className="p-2 whitespace-nowrap">
                              <div className="font-semibold text-left">
                                ID_USUARIO
                              </div>
                            </th>
                            <th className="p-2 whitespace-nowrap">
                              <div className="font-semibold text-left">
                                LOGIN_USUARIO
                              </div>
                            </th>

                            <th className="p-2 whitespace-nowrap">
                              <div className="font-semibold text-center">
                                ID_PLATAFORMA
                              </div>
                            </th>
                            <th className="p-2 whitespace-nowrap">
                              <div className="font-semibold text-center">
                                ID_CHAT
                              </div>
                            </th>
                          </tr>
                        </thead>
                        {/* Table body */}
                        <tbody className="text-sm divide-y divide-slate-400">
                          <tr>
                            <td className="p-2 whitespace-nowrap">
                              <div className="flex items-center">
                                <div className="font-medium text-colorBoldIndigo">
                                  {form.idUsuario}
                                </div>
                              </div>
                            </td>
                            <td className="p-2 whitespace-nowrap">
                              <div className=" text-colorBoldIndigo ">
                                {form.loginUsuario}
                              </div>
                            </td>
                            <td className="p-2 whitespace-nowrap">
                              <div className=" text-colorBoldIndigo text-center">
                                {form.idPlataforma}
                              </div>
                            </td>
                            <td className="p-2 whitespace-nowrap">
                              <div className=" text-colorBoldIndigo text-center">
                                {form.idChat}
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div>
                      <div className="border-t mt-4 flex justify-end">
                        <h2 className="text-gray-600 italic text-lg mt-2 mx-3">
                          Deseja criar login para usuário citado !?
                        </h2>
                        <button
                          onClick={createFormUserLogin}
                          className="p-2 bg-green-300 rounded w-24 hover:bg-indigo-100 ease-in-out cursor-pointer font-bold mt-3 mr-3"
                        >
                          SIM
                        </button>
                        <button
                          className=" bg-red-300 p-2 rounded w-24 hover:bg-gray-200 ease-in-out cursor-pointer font-bold mt-3 "
                          onClick={closeModal}
                        >
                          NÃO
                        </button>
                      </div>
                    </div>
                  </div>
                </Modal>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FormCreateLogin;
