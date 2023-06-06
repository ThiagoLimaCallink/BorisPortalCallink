import React, { useState } from "react";
import boris from "../../images/borisImage/BorisLogoGradient.png";
import { useForm } from "../../hooks/useFormHook";
import ADM_Gerenciamento from "../../utils/axiosbaseurl/ADMGERENCIAMENTO";
// LIBS
import Modal from "react-modal";
const FormCreateAcesso = () => {
  /* FORM DE CRIAÇÃO DE USUÁRIO */
  const { form, onChangeForm, resetForm } = useForm({
    nomeAcesso: "",
    idAcesso: "",
    nivel: "",
  });

  const dados = {
    escolha: "acesso",
    processo: "criar",
    atributos: {
      NIVEL: form.nivel,
      ID_ACESSO: form.idAcesso,
      NOME_ACESSO: form.nomeAcesso,
    },
  };

  const createFormListaAcesso = (event) => {
    event.preventDefault();
    ADM_Gerenciamento.post("/", dados)

      .then((response) => {
        const dados = response.data;
        resetForm(form);
        closeModal();
      })
      .catch((err) => console.log(err));
  };
  /* MODAL FUCTIONS */
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function openModal(e) {
    e.preventDefault();
    setModalIsOpen(true);
    console.log("test");
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
                    ❝ Atenção ao criar acesso do usuario revise todos os campos
                    antes de enviar.❞
                  </p>
                  <p>Boris 🤗</p>
                </div>

                <div className="lg:col-span-2">
                  <form
                    onSubmit={openModal}
                    className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5"
                  >
                    <div className="md:col-span-1">
                      <label htmlFor="id"> ID_ACESSO</label>
                      <input
                        name="idAcesso"
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                        value={form.idAcesso}
                        onChange={onChangeForm}
                      />
                    </div>

                    <div className="md:col-span-3">
                      <label htmlFor="nome">DIGITE NOME DO ACESSO</label>
                      <input
                        type="text"
                        name="nomeAcesso"
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50 text-center"
                        value={form.nomeAcesso}
                        required
                        onChange={onChangeForm}
                        placeholder="DIGITE O NOME DO ACESSO"
                      />
                    </div>

                    <div className="md:col-span-1">
                      <label htmlFor="id_acesso">NIVEL</label>
                      <select
                        name="nivel"
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                        value={form.nivel}
                        onChange={onChangeForm}
                      >
                        <option value="-">--</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                      </select>
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
                                ID_ACESSO
                              </div>
                            </th>
                            <th className="p-2 whitespace-nowrap">
                              <div className="font-semibold text-left">
                                NOME DO ACESSO
                              </div>
                            </th>

                            <th className="p-2 whitespace-nowrap">
                              <div className="font-semibold text-center">
                                NIVEL
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
                                  {form.idAcesso}
                                </div>
                              </div>
                            </td>
                            <td className="p-2 whitespace-nowrap">
                              <div className=" text-colorBoldIndigo ">
                                {form.nomeAcesso}
                              </div>
                            </td>
                            <td className="p-2 whitespace-nowrap">
                              <div className=" text-colorBoldIndigo text-center">
                                {form.nivel}
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div>
                      <div className="border-t mt-4 flex justify-end">
                        <h2 className="text-gray-600 italic text-lg mt-2 mx-3">
                          Deseja criar acesso acima !?
                        </h2>
                        <button
                          onClick={createFormListaAcesso}
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

export default FormCreateAcesso;
