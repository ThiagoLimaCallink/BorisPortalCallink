// IMAGENS
import boris from "../../images/borisImage/BorisLogoGradient.png";
// HOOKS
import { useForm } from "../../hooks/useFormHook";
import { useState, useEffect } from "react";
// COMPONENTS
import ADM_Gerenciamento from "../../utils/axiosbaseurl/ADMGERENCIAMENTO";
// REACT ICONS
import { FcSearch } from "react-icons/fc";
// LIBS
import Modal from "react-modal";
/* END POINT DE ATUALIZAR ACESSO LOGIN */
const UpdatedUsersLogin = () => {
  const [dadoFilter, setDadosFilter] = useState([]);
  const { form, onChangeForm, resetForm } = useForm({
    idLogin: "",
    loginUsuario: "",
    idChat: "",
  });

  const dados = {
    escolha: "login",
    processo: "Atualizar",
    atributos: {
      ID_LOGIN: form.idLogin,
      LOGIN_USUARIO: form.loginUsuario,
      ID_CHAT: form.idChat,
    },
  };

  const HandleUsersLogin = (event) => {
    event.preventDefault();
    ADM_Gerenciamento.post("/", dados)

      .then((response) => {
        const dados = response.data;
        console.log(dados);
      })
      .catch((err) => console.log(err));
  };

  // SEARCH USER CLICK
  const requestApi = {
    escolha: "login",
    processo: "leitura",
  };
  useEffect(() => {
    // Função para buscar os dados da API
    const fetchDados = async () => {
      try {
        const response = await ADM_Gerenciamento.post("/", requestApi); // Substitua '/api/dados' pelo endpoint correto da sua API
        setDadosFilter(response.data);
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    // Chama a função de busca dos dados
    fetchDados();
  }, []);

  const handleSearch = () => {
    const idLogin = parseInt(form.idLogin);
    // Realize o filtro dos dados com base no ID digitado
    const filteredData = dadoFilter.filter((item) => item.ID_LOGIN === idLogin);
    console.log(filteredData);

    // Verifique se o resultado do filtro é válido
    if (filteredData.length > 0) {
      // Preencha os campos do formulário com os dados filtrados
      const filteredItem = filteredData[0]; // Considere apenas o primeiro item filtrado
      onChangeForm({
        target: { name: "loginUsuario", value: filteredItem.LOGIN_USUARIO },
      });
      onChangeForm({
        target: { name: "idChat", value: filteredItem.ID_CHAT },
      });
    } else {
      // Caso não haja resultado, você pode mostrar uma mensagem de erro ou limpar os campos do formulário
      alert("ID de usuário não encontrado.");
      resetForm(form);
    }
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
                    <strong className="italic">Login</strong> do Usuário confira
                    todos os dados antes de clicar em enviar.❞
                  </p>
                  <p>Boris 🤗</p>
                </div>

                <div className="lg:col-span-2">
                  <form
                    onSubmit={openModal}
                    className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5"
                  >
                    <div className="md:col-span-1">
                      <label htmlFor="idLogin">ID_LOGIN</label>
                      <input
                        name="idLogin"
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50 text-center"
                        value={form.idLogin}
                        onChange={onChangeForm}
                        type="number"
                      />
                    </div>
                    <div className="md:col-span-1">
                      <button
                        onClick={handleSearch}
                        className="h-10 border mt-6 rounded px-4  hover:bg-indigo-200"
                      >
                        <FcSearch size={25} />
                      </button>
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
                        placeholder="Digite o login do usuário"
                      />
                    </div>

                    <div className="md:col-span-1">
                      <label htmlFor="idChat">ID_CHAT</label>
                      <input
                        name="idChat"
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50 text-center"
                        value={form.idChat}
                        onChange={onChangeForm}
                        type="number"
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
                                ID_LOGIN
                              </div>
                            </th>
                            <th className="p-2 whitespace-nowrap">
                              <div className="font-semibold text-left">
                                LOGIN_USUARIO
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
                                  {form.idLogin}
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
                          Deseja atualizar usuário com as informações acima !?
                        </h2>
                        <button
                          onClick={HandleUsersLogin}
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
