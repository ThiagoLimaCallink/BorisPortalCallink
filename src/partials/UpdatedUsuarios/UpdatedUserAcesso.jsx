//IMAGENS
import boris from "../../images/borisImage/BorisLogoGradient.png";
// HOOKS
import { useForm } from "../../hooks/useFormHook";
import { useState } from "react";
// COMPONENTS
import ADM_Gerenciamento from "../../utils/axiosbaseurl/ADMGERENCIAMENTO";
// LIBS
import Modal from "react-modal";

const UpdatedUsersLogin = () => {
  const { form, onChangeForm, resetForm } = useForm({
    idAcesso: "",
    nivel: "",
    nomeAcesso: "",
  });

  const dados = {
    escolha: "acesso",
    processo: "Atualizar",
    atributos: {
      ID_ACESSO: form.idAcesso,
      NIVEL: form.nivel,
      NOME_ACESSO: form.nomeAcesso,
    },
  };

  const HandleUsersAcesso = (event) => {
    event.preventDefault();
    ADM_Gerenciamento.post("/", dados)

      .then((response) => {
        const dados = response.data;
        console.log(dados);
        setInterval(() => {
          resetForm(form);
        }, 4000);
      })
      .catch((err) => console.log(err));
  };

  /**************** MODAL FUNCTIONS *******************/
  const [modalIsOpen, setModalIsOpen] = useState(false);
  function openModal(e) {
    e.preventDefault();
    setModalIsOpen(true);
    console.log("test");
  }
  function closeModal() {
    setModalIsOpen(false);
  }
  const customStyles = {
    content: {
      height: "35%",
    },
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
                  <p className="mt-6 text-colorBoldIndigo text-xl">
                    ❝ Atenção você esta atualizando o{" "}
                    <strong className="italic">Acesso</strong> do Usuário
                    confira todos os dados antes de clicar em enviar.❞
                  </p>
                  <p>Boris 🤗</p>
                </div>

                <div className="lg:col-span-2">
                  <form
                    onSubmit={openModal}
                    className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-1"
                  >
                    <div className="md:col-span-1">
                      <label htmlFor="idAcesso">ID ACESSO</label>
                      <input
                        name="idAcesso"
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                        value={form.idAcesso}
                        onChange={onChangeForm}
                        type="number"
                      />
                    </div>

                    <div className="md:col-span-1">
                      <label htmlFor="nivel">NIVEL</label>
                      <input
                        name="nivel"
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                        value={form.nivel}
                        onChange={onChangeForm}
                        type="number"
                      />
                    </div>

                    <div className="md:col-span-3">
                      <label htmlFor="nomeAcesso">NOME ACESSO</label>
                      <input
                        type="text"
                        name="nomeAcesso"
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                        value={form.nomeAcesso}
                        required
                        onChange={onChangeForm}
                        placeholder="Digite o nome de acesso do usuário"
                      />
                    </div>

                    <div className="md:col-span-5 text-center mt-3">
                      <div className="inline-flex ">
                        <button
                          type="submit"
                          className="bg-indigo-500 hover:bg-indigo-400  ease-out text-white font-bold py-2 px-8 rounded"
                        >
                          ATUALIZAR
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
                <Modal isOpen={modalIsOpen} style={customStyles}>
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
                                NIVEL
                              </div>
                            </th>

                            <th className="p-2 whitespace-nowrap">
                              <div className="font-semibold text-center">
                                NOME ACESSO
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
                              <div className=" text-colorBoldIndigo ml-3 ">
                                {form.nivel}
                              </div>
                            </td>
                            <td className="p-2 whitespace-nowrap">
                              <div className=" text-colorBoldIndigo text-center">
                                {form.nomeAcesso}
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div>
                      <div className="border-t mt-4 flex justify-end">
                        <h2 className="text-gray-600 italic text-lg mt-2 mx-3">
                          Deseja atualizar usuário com as informações acima !?
                        </h2>
                        <button
                          onClick={HandleUsersAcesso}
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

export default UpdatedUsersLogin;
