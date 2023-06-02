import React, { useState } from "react";
import boris from "../../images/borisImage/BorisLogoGradient.png";
import { useForm } from "../../hooks/useFormHook";
import ADM_Gerenciamento from "../../utils/axiosbaseurl/ADMGERENCIAMENTO";
const FormCreatePerfil = () => {
  /* FORM DE CRIAÇÃO DE PERFIL */
  const { form, onChangeForm, resetForm } = useForm({
    idPerfil: "",
    nivel: "",
    nomePerfil: "",
  });

  const useEffect =
    (() => {
      createFormUserBoris();
    },
    []);

  const dados = {
    escolha: "perfil",
    processo: "criar",
    atributos: {
      ID_PERFIL: form.idPerfil,
      NIVEl: form.nivel,
      NOME_PERFIL: form.nomePerfil,
    },
  };

  const createFormUserLogin = (event) => {
    event.preventDefault();
    ADM_Gerenciamento.post("/", dados)

      .then((response) => {
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
                    ❝ Atenção ao criar Perfil do Usuário, revise todos os campos
                    antes de enviar.❞
                  </p>
                  <p>Boris 🤗</p>
                </div>

                <div className="lg:col-span-2">
                  <form
                    onSubmit={createFormUserLogin}
                    className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5"
                  >
                    <div className="md:col-span-3">
                      <label htmlFor="nomePerfil">NOME PERFIL</label>
                      <input
                        type="text"
                        name="nomePerfil"
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                        value={form.nomePerfil}
                        required
                        onChange={onChangeForm}
                        placeholder="Digite o login do usuário"
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

                    <div className="md:col-span-1">
                      <label htmlFor="idPerfil">ID PERFIl</label>
                      <input
                        name="idPerfil"
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                        value={form.idPerfil}
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

export default FormCreatePerfil;
