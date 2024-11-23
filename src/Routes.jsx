import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Login from "./pages/Login/index";
import Email from "./pages/SendEmail/index";
import Cadastro from "./pages/Cadastro/index";
import ListarUsuarios from "./pages/Lista/index";
import Forgot from "./pages/Forgot";
import ResetPassword from "./pages/ResetPassword";

function AppRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/Cadastro" element={<Cadastro />}></Route>
        <Route path="/SendEmail" element={<Email />}></Route>
        <Route path="/Lista" element={<ListarUsuarios />}></Route>
        <Route path="/Forgot" element={<Forgot />}></Route>
        <Route path="/ResetPassword" element={<ResetPassword />}></Route>
        <Route path="*" element={<Navigate to="/" replace />}></Route>
      </Routes>
    </div>
  );
}

export default AppRoutes;
