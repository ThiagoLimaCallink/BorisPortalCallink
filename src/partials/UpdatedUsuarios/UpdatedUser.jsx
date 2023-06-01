// IMAGENS
import boris from "../../images/borisImage/BorisLogoGradient.png";
// HOOKS
import { useForm } from "../../hooks/useFormHook";
import { useState, useEffect } from "react";
import InputMask from "react-input-mask";
// AXIOS BASE URL
import ADM_Gerenciamento from "../../utils/axiosbaseurl/ADMGERENCIAMENTO";
// REACT ICONS
import { FcSearch } from "react-icons/fc";

/******************************************************************* */

/**************************************************************** 
   FUNÇÃO ABAIXO FAZ O POST PARA API, PARA ATUALIZAR OS DADOS ! FAZEMOS MONITORAMENTO
  DA FUNÇÃO USANDO USEEFFECT 
  /************************************************************ */
const UpdatedUser = () => {
  const [dadoFilter, setDadosFilter] = useState([]);
  const { form, onChangeForm, resetForm } = useForm({
    nome: "",
    email: "",
    idPerfil: "",
    idAcesso: "",
    idEmpresa: "",
    idUsuario: "",
    empresa: "",
    telefone: "",
    departamento: "",
  });

  const dados = {
    escolha: "usuario",
    processo: "atualizar",
    atributos: {
      ID_USUARIO: form.idUsuario,
      ID_EMPRESA: form.idEmpresa,
      NOME: form.nome,
      ID_PERFIL: form.idPerfil,
      ID_ACESSO: form.idAcesso,
      TELEFONE: form.telefone,
      EMPRESA: form.empresa,
      DEPARTAMENTO: form.departamento,
      EMAIL: form.email,
      FLG_VALIDA_ESCALA: form.valida,
      NOME_FONETICO: "",
      DAT_NASCIMENTO: "",
    },
  };

  const UpdatedUsers = (event) => {
    event.preventDefault();
    ADM_Gerenciamento.post("/", dados)

      .then((response) => {
        const dados = response.data;

        setInterval(() => {
          resetForm(form);
        }, 4000);
      })
      .catch((err) => console.log(err));
  };

  /****************************************************************** */

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
      } catch (error) {
        console.log(error);
      }
    };

    // Chama a função de busca dos dados
    fetchDados();
  }, []);

  const handleSearch = () => {
    // Realize o filtro dos dados com base no ID digitado
    const filteredData = dadoFilter.filter(
      (item) => item.ID_USUARIO === form.idUsuario
    );
    console.log(filteredData);

    // Verifique se o resultado do filtro é válido
    if (filteredData.length > 0) {
      // Preencha os campos do formulário com os dados filtrados
      const filteredItem = filteredData[0]; // Considere apenas o primeiro item filtrado
      onChangeForm({
        target: { name: "nome", value: filteredItem.NOME },
      });
      onChangeForm({
        target: { name: "email", value: filteredItem.EMAIL },
      });
      onChangeForm({
        target: { name: "idPerfil", value: filteredItem.ID_PERFIL },
      });
      onChangeForm({
        target: { name: "idAcesso", value: filteredItem.ID_ACESSO },
      });
      onChangeForm({
        target: { name: "idEmpresa", value: filteredItem.ID_EMPRESA },
      });
      onChangeForm({
        target: { name: "empresa", value: filteredItem.EMPRESA },
      });
      onChangeForm({
        target: { name: "telefone", value: filteredItem.TELEFONE },
      });
      onChangeForm({
        target: { name: "departamento", value: filteredItem.DEPARTAMENTO },
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
                    ❝ Atenção ao atualizar o{" "}
                    <strong className="italic">usuário</strong> ,
                    <br />
                    revise todos os campos antes de enviar.❞
                  </p>
                  <p>Boris 🤗</p>
                </div>

                <div className="lg:col-span-2 mt-16">
                  <form
                    onSubmit={UpdatedUsers}
                    className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5"
                  >
                    <div className="md:col-span-2">
                      <label htmlFor="idUsuario">ID_USUARIO</label>
                      <input
                        type="number"
                        name="idUsuario"
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                        value={form.idUsuario}
                        onChange={onChangeForm}
                        required
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

                    <div className="md:col-span-5">
                      <label htmlFor="nome">Digite o nome do usuário</label>
                      <input
                        type="text"
                        name="nome"
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                        value={form.nome}
                        required
                        onChange={onChangeForm}
                        placeholder="Digite seu nome completo"
                      />
                    </div>

                    <div className="md:col-span-3">
                      <label htmlFor="email">Digite E-MAIL do usuário</label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                        value={form.email}
                        onChange={onChangeForm}
                        placeholder="email@domain.com"
                        required
                      />
                    </div>

                    <div className="md:col-span-1">
                      <label htmlFor="id"> ID_PERFIl</label>
                      <select
                        name="idPerfil"
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                        value={form.idPerfil}
                        onChange={onChangeForm}
                      >
                        <option value="-">--</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                      </select>
                    </div>

                    <div className="md:col-span-1">
                      <label htmlFor="id_acesso">ID_ACESSO</label>
                      <select
                        name="idAcesso"
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                        value={form.idAcesso}
                        onChange={onChangeForm}
                      >
                        <option value="-">--</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                      </select>
                    </div>
                    <div className="md:col-span-1">
                      <label htmlFor="id_acesso">ID_EMPRESA</label>
                      <input
                        type="number"
                        name="idEmpresa"
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                        value={form.idEmpresa}
                        onChange={onChangeForm}
                        required
                      />
                    </div>
                    <div className="md:col-span-2 ">
                      <label htmlFor="telefone">TELEFONE</label>
                      <div className="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                        <InputMask
                          name="telefone"
                          mask="(99) 99999-9999"
                          className="px-4 rounded outline-none text-gray-800 w-full bg-transparent"
                          value={form.telefone}
                          onChange={onChangeForm}
                        />
                      </div>
                    </div>

                    <div className="md:col-span-2">
                      <label htmlFor="empresa">EMPRESA</label>
                      <div className="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                        <input
                          name="empresa"
                          className="px-4 rounded outline-none text-gray-800 w-full bg-transparent"
                          value={form.empresa}
                          type="text"
                          onChange={onChangeForm}
                          required
                        />
                      </div>
                    </div>

                    <div className="md:col-span-2">
                      <label htmlFor="Departamento">DEPARTAMENTO</label>
                      <input
                        type="text"
                        name="departamento"
                        className="transition-all flex items-center h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                        value={form.departamento}
                        onChange={onChangeForm}
                        required
                      />
                    </div>
                    <div className="md:col-span-1">
                      <label htmlFor="Departamento">VALIDA ESCALA</label>
                      <select
                        name="valida"
                        value={form.valida}
                        onChange={onChangeForm}
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      >
                        <option value="-">--</option>
                        <option value="1">SIM</option>
                        <option value="2">NÂO</option>
                      </select>
                    </div>

                    <div className="md:col-span-5 text-center mt-3 ">
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

export default UpdatedUser;
