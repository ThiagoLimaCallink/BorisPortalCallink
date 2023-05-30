import { useState } from "react";

export const useForm = (initialState) => {
  const [form, setForm] = useState(initialState);

  const resetForm = () => {
    setForm(initialState);
  };

  const onChangeForm = (event) => {
    const { name, value } = event.target;
    const parsedValue =
      name === "idPerfil" ||
      name === "idEmpresa" ||
      name === "idAcesso" ||
      name === "nivel"
        ? +value
        : value;
    setForm((prevForm) => ({ ...prevForm, [name]: parsedValue }));
  };

  return { form, onChangeForm, resetForm };
};
