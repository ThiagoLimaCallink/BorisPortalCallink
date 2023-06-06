import boris from "../../images/borisImage/BorisLogoGradient.png";
import { useForm } from "../../hooks/useFormHook";
import ADM_Gerenciamento from "../../utils/axiosbaseurl/ADMGERENCIAMENTO";
import { useEffect, useState } from "react";
import { FcSearch } from "react-icons/fc";
const UpdatedUsersPerfil = () => {
  const [dadoFilter, setDadosFilter] = useState([]);
  const { form, onChangeForm, resetForm } = useForm({
    idPerfil: "",
    nomePerfil: "",
    nivel: "",
  });

  const dados = {
    escolha: "perfil",
    processo: "Atualizar",
    atributos: {
      ID_PERFIL: form.idPerfil,
      NOME_PERFIL: form.nomePerfil,
      NIVEL: form.nivel,
    },
  };

  const HandleUsersPerfil = (event) => {
    event.preventDefault();
    ADM_Gerenciamento.post("/", dados)

      .then((response) => {
        const dados = response.data;
      })
      .catch((err) => console.log(err));
  };

  /* REQUEST PARA PEGAR DADOS */

  // SEARCH USER CLICK
  const requestApi = {
    escolha: "usuario",
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
    const idPerfil = parseInt(form.idPerfil);
    // Realize o filtro dos dados com base no ID digitado
    const filteredData = dadoFilter.filter(
      (item) => item.ID_PERFIL === idPerfil
    );
    console.log(filteredData);

    // Verifique se o resultado do filtro é válido
    if (filteredData.length > 0) {
      // Preencha os campos do formulário com os dados filtrados
      const filteredItem = filteredData[0]; // Considere apenas o primeiro item filtrado
      onChangeForm({
        target: { name: "nomePerfil", value: filteredItem.NOME },
      });
    } else {
      // Caso não haja resultado, você pode mostrar uma mensagem de erro ou limpar os campos do formulário
      alert("ID de usuário não encontrado.");
      resetForm(form);
    }
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
                    <strong className="italic">Perfil</strong> do Usuário
                    confira todos os dados antes de clicar em enviar.❞
                  </p>
                  <p>Boris 🤗</p>
                </div>

                <div className="lg:col-span-2">
                  <form
                    onSubmit={HandleUsersPerfil}
                    className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5"
                  >
                    <div className="md:col-span-1">
                      <label htmlFor="idPerfil">ID_PERFIl</label>
                      <input
                        name="idPerfil"
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50 text-center"
                        value={form.idPerfil}
                        onChange={onChangeForm}
                        type="number"
                      />
                      <div className="md:col-span-1">
                        <button
                          onClick={handleSearch}
                          className="h-10 border mt-6 rounded px-4  hover:bg-indigo-200"
                        >
                          <FcSearch size={25} />
                        </button>
                      </div>
                    </div>
                    <div className="md:col-span-3">
                      <label htmlFor="nomePerfil">NOME_PERFIL</label>
                      <input
                        type="text"
                        name="nomePerfil"
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50 text-center"
                        value={form.nomePerfil}
                        required
                        onChange={onChangeForm}
                        placeholder="Digite o nome do perfil do usuário"
                      />
                    </div>

                    <div className="md:col-span-1">
                      <label htmlFor="nivel">NIVEL</label>
                      <input
                        name="nivel"
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50 text-center"
                        value={form.nivel}
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

export default UpdatedUsersPerfil;
