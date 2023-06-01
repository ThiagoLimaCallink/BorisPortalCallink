/* IMAGEM */
import boris from "../../images/borisImage/BorisLogoGradient.png";
/* HOOKS */
import { useForm } from "../../hooks/useFormHook";
import { useState } from "react";
import ADM_Gerenciamento from "../../utils/axiosbaseurl/ADMGERENCIAMENTO";
/*LIBS */
import Modal from "react-modal";

const FecharTodosLogin = () => {
  /* END POINT DE FECHAR TODOS OS LOGINS */
  const { form, onChangeForm, resetForm } = useForm({
    idUsuario: "",
  });

  const dados = {
    escolha: "login",
    processo: "fechar_todos",
    atributos: {
      ID_USUARIO: form.idUsuario,
    },
  };

  const CloseLoginAll = (event) => {
    event.preventDefault();
    ADM_Gerenciamento.post("/", dados)

      .then((response) => {
        const dados = response.data;
        console.log(dados);
        resetForm(form);
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
  /* STYLES MODAL */
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      transform: "translate(-50%, -50%)",
    },
  };
  /**************** ########## *******************/
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
                    ❝ Atenção você Fechando todos os{" "}
                    <strong className="italic">Login</strong> do Usuário confira
                    todos os dados antes de clicar em enviar.❞
                  </p>
                  <p>Boris 🤗</p>
                </div>

                <div className="lg:col-span-2">
                  <form
                    onSubmit={openModal}
                    className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-4 "
                  >
                    <div className="md:col-span-1  ">
                      <label htmlFor="idUsuario">ID USUARIO</label>
                      <input
                        name="idUsuario"
                        className="h-10 border text-center mt-1 rounded px-4 w-full bg-gray-50"
                        value={form.idUsuario}
                        onChange={onChangeForm}
                        type="number"
                      />
                    </div>
                    <div className="md:col-span-1 mt-7 text-center">
                      <div className="inline-flex ">
                        <button
                          type="submit"
                          className="bg-red-300 p-2 rounded w-28 hover:bg-gray-200 ease-in-out cursor-pointer font-bold"
                        >
                          ENVIAR
                        </button>
                      </div>
                    </div>
                  </form>
                  <Modal isOpen={modalIsOpen} style={customStyles}>
                    <header className="bg-slate-200 w-full p-2 rounded">
                      <div className="font-semi-bold">
                        {" "}
                        <strong className="text-red font-bold">
                          ATENÇÃO:
                        </strong>{" "}
                        VOCÊ ESTA FECHANDO TODOS OS LOGINS
                      </div>
                    </header>
                    <span className="text-xl flex justify-center mt-2">
                      {" "}
                      Soliticação ID_UDUARIO:{" "}
                      <strong className="text-bold ml-1">
                        {" "}
                        "{form.idUsuario}"
                      </strong>
                    </span>
                    <div className="border-t mt-4 flex justify-end">
                      <button
                        onClick={CloseLoginAll}
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
                  </Modal>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FecharTodosLogin;
