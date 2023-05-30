import React, { useState } from "react";
import boris from "../../images/borisImage/BorisLogoGradient.png";
import { useForm } from "../../hooks/useFormHook";
import ADM_Gerenciamento from "../../utils/axiosbaseurl/ADMGERENCIAMENTO";
const FormCreateAcesso = () => {
  const { form, onChangeForm, resetForm } = useForm({
    nomeAcesso: "",
    idAcesso: "",
    nivel: "",
  });

  const useEffect =
    (() => {
      createFormListaAcesso();
    },
    []);

  const dados = {
    escolha: "acesso",
    processo: "criar",
    atributos: {
      NIVEL: form.nivel,
      ID_ACESSO: form.idAcesso,
      NOME_ACESSO: form.nomeAcesso,
    },
  };

  console.log(form);

  const createFormListaAcesso = (event) => {
    event.preventDefault();
    ADM_Gerenciamento.post("/", dados)

      .then((response) => {
        console.log(response);
        const dados = response.data;
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
                    ❝ Atenção ao criar acesso do usuario revise todos os campos
                    antes de enviar.❞
                  </p>
                  <p>Boris 🤗</p>
                </div>

                <div className="lg:col-span-2">
                  <form
                    onSubmit={createFormListaAcesso}
                    className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5"
                  >
                    <div className="md:col-span-3">
                      <label htmlFor="nome">Digite o nome do acesso</label>
                      <input
                        type="text"
                        name="nomeAcesso"
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                        value={form.nomeAcesso}
                        required
                        onChange={onChangeForm}
                        placeholder="Digite o nome do acesso"
                      />
                    </div>

                    <div className="md:col-span-1">
                      <label htmlFor="id"> ID_ACESSO</label>
                      <input
                        name="idAcesso"
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                        value={form.idAcesso}
                        onChange={onChangeForm}
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

export default FormCreateAcesso;
