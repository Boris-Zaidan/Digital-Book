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
    <div className="w-screen h-screen flex flex-col bg-white/90 overflow-hidden">
      <header className="fixed top-0 w-full flex justify-center flex-wrap bg-yellow-400 z-10">
        <h1 className="text-lg p-3 font-medium">Cadastro De Funcionários</h1>
      </header>

      <main className="w-[92%] mt-2 sm:h-[90%] md:w-4/5 mx-auto sm:mt-1 flex justify-center items-center ">
        <form
          className="sm:w-full md:w-3/4 flex flex-col justify-center items-center mt-4 mx-auto p-4"
          onSubmit={handleSubmit}
        >
          <div className="w-full m-1">
            <div className=" flex mt-12 sm:w-full sm:flex md:flex gap-2">
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
            </div>

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
            className="my-1 bg-yellow-400 mx-auto py-2 rounded-md w-2/3 focus:outline-none font-semibold"
          >
            Cadastrar
          </button>
        </form>
      </main>

      <div className="fixed bottom-0 w-full flex justify-center bg-stone-300 p-3">
        <Footer />
      </div>
    </div>
  );
}

export default Cadastro;
