import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [navigateHome, setNavigateHome] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [dados, setDados] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const body = {
        username,
        password,
      };

      const response = await axios.post(
        "https://southamerica-east1-boris-callink.cloudfunctions.net/valida_login",
        body
      );

      console.log(response.data);
      if (response.data.STATUS === true) {
        setNavigateHome(true);
        const user = response.data.STATUS === true;
        const dados = response.data;
        setDados(dados);
        setUser(user);
      } else {
        setErrorMessage("Senha incorreta. Verifique novamente.");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const signOut = () => {
    setNavigateHome(false);
    setUsername("");
    setPassword("");
    setErrorMessage("");
    setUser(null);
  };

  useEffect(() => {
    console.log("User:", user);
  }, [user]);

  return (
    <AuthContext.Provider
      value={{
        signed: !!user,
        user,
        handleLogin,
        username,
        setUsername,
        password,
        setPassword,
        navigateHome,
        setNavigateHome,
        errorMessage,
        setErrorMessage,
        signOut,
        dados,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
