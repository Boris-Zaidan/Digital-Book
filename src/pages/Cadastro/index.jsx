import React, { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import api from "../../Services/Api.js";
import CampoInput from "../../Components/Input/index.jsx";
import Footer from "../../Components/Footer/index.jsx";

function Cadastro() {
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    email: "",
    profession: "",
    serviceStation: "",
    phone: "",
    password: "",
  });

  const [isRegistered, setIsRegistered] = useState(false);

  useEffect(() => {
    if (isRegistered) {
      setFormData({
        name: "",
        surname: "",
        email: "",
        profession: "",
        serviceStation: "",
        phone: "",
        password: "",
      });
    }
  }, [isRegistered]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post("/cadastro", formData);
      alert("Funcionário cadastrado com sucesso!");
      setIsRegistered(true);
    } catch (error) {
      alert("Erro ao cadastrar Funcionário: " + error.message);
    }
  };

  if (isRegistered) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="w-screen h-screen flex justify-center items-center flex-col bg-stone-300 overflow-hidden">
      <div className="fixed top-0 w-full flex justify-center flex-wrap bg-yellow-400">
        <h1 className="text-lg p-3 font-medium">Cadastro De Funcionários</h1>
      </div>
      <main className="w-10/12 md:w-4/5 mx-auto flex justify-center items-center mt-10 border rounded-md">
        <form
          className="sm:w-full md:w-7/10 flex flex-col md:justify-end justify-center items-center px-10 py-3 gap-5"
          onSubmit={handleSubmit}
        >
          <div className="w-full">
            <CampoInput
              label="Nome"
              type="text"
              value={formData.name}
              onChange={handleChange}
              placeholder="Digite seu Nome"
              name="name"
            />
            <CampoInput
              label="Sobrenome"
              type="text"
              value={formData.surname}
              onChange={handleChange}
              placeholder="Digite seu Sobrenome"
              name="surname"
            />
            <CampoInput
              label="Email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Digite seu Email"
              name="email"
            />
            <CampoInput
              label="Profissão"
              type="text"
              value={formData.profession}
              onChange={handleChange}
              placeholder="Digite sua Profissão"
              name="profession"
            />
            <CampoInput
              label="Posto de Serviço"
              type="text"
              value={formData.serviceStation}
              onChange={handleChange}
              placeholder="Digite seu local de Serviço"
              name="serviceStation"
            />
            <CampoInput
              label="Telefone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Ex: (32) 99149-0000"
              name="phone"
            />
            <CampoInput
              label="Senha"
              type="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Digite sua Senha"
              name="password"
            />
          </div>
          <button
            type="submit"
            className="mt-5 bg-yellow-400 px-4 py-2 rounded-md w-full focus:outline-none"
          >
            Cadastrar
          </button>
        </form>
      </main>
      <div className="fixed bottom-0 w-full flex justify-center bg-stone-300">
        <Footer />
      </div>
    </div>
  );
}

export default Cadastro;
