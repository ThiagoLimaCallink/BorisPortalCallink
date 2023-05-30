import React, { useState, useContext } from "react";
import { Helmet } from "react-helmet";
import { Navigate } from "react-router-dom";
import { RiEyeLine } from "react-icons/ri";
import { FiUsers } from "react-icons/fi";
import { BsFillEyeSlashFill } from "react-icons/bs";
import borisLogoGradient from "../images/borisImage/BorisLogoGradient.png";
import borisWallpaper from "../images/borisImage/Workingboris.gif";
import { AuthContext } from "../hooks/useAuthLogin";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const {
    handleLogin,
    username,
    setUsername,
    password,
    setPassword,
    navigateHome,
    errorMessage,
  } = useContext(AuthContext);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <Helmet>
        <title>Login Portal Boris</title>
      </Helmet>
      <div className="bg-gradient-to-r from-indigo-500 h-screen overflow-hidden flex items-center justify-center  ">
        <div className="w-10/12 lg:w-9/12 xl:w-7/12 flex z-50">
          <div
            className="w-full h-auto hidden lg:block lg:w-1/2 bg-cover bg-top rounded-lg lg:rounded-r-none shadow-md z-50"
            style={{ backgroundImage: `url(${borisWallpaper})` }}
          ></div>
          <div className=" relative w-full lg:w-1/2 bg-white rounded-lg lg:rounded-l-none py-24 px-12 shadow-md">
            <div className="text-3xl text-center tracking-widest  uppercase mb-4">
              <img
                src={borisLogoGradient}
                alt="Imagem escrita Boris em cores gradient"
                className="w-24"
              />
            </div>
            <form className="bg-white" onSubmit={handleLogin}>
              <div className="mb-4">
                <label
                  className="block mb-2 text-sm font-bold"
                  htmlFor="username"
                >
                  <span className="flex items-center">
                    <FiUsers className="mr-2" size={20} /> Login
                  </span>
                </label>
                <input
                  type="text"
                  id="username"
                  className="w-full p-3 text-md border rounded shadow  focus:outline-none focus:shadow-outline "
                  placeholder="Usuário"
                  onChange={(e) => setUsername(e.target.value)}
                  value={username}
                />
              </div>
              <div className="mb-4">
                <label
                  className="block mb-2 text-sm font-bold"
                  htmlFor="password"
                >
                  <span className="flex items-center">
                    Senha
                    {showPassword ? (
                      <RiEyeLine
                        className="ml-2 cursor-pointer"
                        onClick={togglePasswordVisibility}
                        size={20}
                      />
                    ) : (
                      <BsFillEyeSlashFill
                        className="ml-2 cursor-pointer"
                        onClick={togglePasswordVisibility}
                        size={20}
                      />
                    )}
                  </span>
                </label>
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  className="w-full p-3 text-md border rounded shadow focus:outline-none focus:shadow-outline "
                  placeholder="Digite sua senha"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                />
              </div>
              <div className="mb-4">
                <button
                  className="w-full p-3 font-bold text-colorBoldIndigo bg-blue-300 hover:bg-blue-500  focus:outline-none"
                  type="submit"
                >
                  Logar
                </button>
              </div>
              <hr className="mb-4 border-t" />
            </form>

            <div className="mb-2  p-2 text-center text-bold">
              {navigateHome ? (
                <Navigate to="/home" />
              ) : (
                errorMessage && <p>{errorMessage}</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
