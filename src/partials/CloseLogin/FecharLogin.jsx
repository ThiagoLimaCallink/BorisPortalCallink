import boris from "../../images/borisImage/BorisLogoGradient.png";
import { useForm } from "../../hooks/useFormHook";
import ADM_Gerenciamento from "../../utils/axiosbaseurl/ADMGERENCIAMENTO";
const FecharLogin = () => {
  const { form, onChangeForm, resetForm } = useForm({
    idLogin: "",
  });

  const useEffect =
    (() => {
      CloseLogin();
    },
    []);

  const dados = {
    escolha: "login",
    processo: "fechar",
    atributos: {
      ID_LOGIN: form.idLogin,
    },
  };

  const CloseLogin = (event) => {
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
                  <p className="mt-6 text-colorBoldIndigo text-xl">
                    ❝ Atenção você Fechando{" "}
                    <strong className="italic">Login</strong> do Usuário confira
                    todos os dados antes de clicar em enviar.❞
                  </p>
                  <p>Boris 🤗</p>
                </div>

                <div className="lg:col-span-2">
                  <form
                    onSubmit={CloseLogin}
                    className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-4 "
                  >
                    <div className="md:col-span-1  ">
                      <label htmlFor="idLogin">ID LOGIN</label>
                      <input
                        name="idLogin"
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                        value={form.idLogin}
                        onChange={onChangeForm}
                        type="number"
                      />
                    </div>
                    <div className="md:col-span-1 mt-7 text-center">
                      <div className="inline-flex ">
                        <button
                          type="submit"
                          className="bg-red-500 hover:bg-indigo-100  text-white  font-bold py-2 px-8 rounded"
                        >
                          ENVIAR
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

export default FecharLogin;
