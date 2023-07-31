import React, { useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { AuthContext } from "./hooks/useAuthLogin";
import rotas from "./utils/rotas/rotas";
import "./css/style.css";
import "./charts/ChartjsConfig";

function App() {
  const { signed } = useContext(AuthContext);

  return (
    <>
      <Routes>
        {rotas.map((rota, index) => (
          <Route
            key={index}
            path={rota.path}
            element={
              rota.private ? (
                signed ? (
                  <rota.component />
                ) : (
                  <Navigate to="/" />
                )
              ) : (
                <rota.component />
              )
            }
            exact={rota.exact}
          />
        ))}
      </Routes>
    </>
  );
}

export default App;
