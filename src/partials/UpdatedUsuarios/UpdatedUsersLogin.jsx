import boris from "../../images/borisImage/BorisLogoGradient.png";
import { useForm } from "../../hooks/useFormHook";
import ADM_Gerenciamento from "../../utils/axiosbaseurl/ADMGERENCIAMENTO";
const UpdatedUsersLogin = () => {
  const { form, onChangeForm, resetForm } = useForm({
    idLogin: "",
    loginUsuario: "",
    idChat: "",
  });

  const useEffect =
    (() => {
      HandleUsersLogin();
    },
    []);

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
        setInterval(() => {
          resetForm(form);
        }, 4000);
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
                  <p className="mt-6 text-colorBoldIndigo text-xl">
                    ❝ Atenção você esta atualizando o{" "}
                    <strong className="italic">Login</strong> do Usuário confira
                    todos os dados antes de clicar em enviar.❞
                  </p>
                  <p>Boris 🤗</p>
                </div>

                <div className="lg:col-span-2">
                  <form
                    onSubmit={HandleUsersLogin}
                    className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5"
                  >
                    <div className="md:col-span-3">
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
                      <label htmlFor="idLogin">ID LOGIN</label>
                      <input
                        name="idLogin"
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                        value={form.idLogin}
                        onChange={onChangeForm}
                        type="number"
                      />
                    </div>

                    <div className="md:col-span-1">
                      <label htmlFor="idChat">ID CHAT</label>
                      <input
                        name="idChat"
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                        value={form.idChat}
                        onChange={onChangeForm}
                        type="number"
                      />
                    </div>

                    <div className="md:col-span-5 text-center mt-3">
                      <div className="inline-flex ">
                        <button
                          type="submit"
                          className="bg-indigo-500 hover:bg-indigo-100  text-colorBoldIndigo font-bold py-2 px-8 rounded"
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

export default UpdatedUsersLogin;