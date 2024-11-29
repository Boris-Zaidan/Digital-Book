import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import api from "../../Services/Api.js";
import Logo from "../../assets/login.png";
import CampoInput from "../../Components/Input";
import Footer from "../../Components/Footer";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

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
      const { data: token } = await api.post("/login", formData);
      localStorage.setItem("token", token);
      alert("Usuário Logado com sucesso!");
      setFormData({ email: "", password: "" });

      //posso ir para lista de usuários ou enviar email
      navigate("/Lista");
    } catch (error) {
      alert("Senha ou email inválido ");
      console.error(error);
    }
  };

  return (
    <div className="w-screen h-screen grid grid-cols-1 md:grid-cols-2 grid-rows-6 bg-slate-50/80 overflow-hidden">
      <div className="row-span-5 md:flex justify-end items-center hidden">
        <header>
          <img className="max-w-sm" src={Logo} alt="imagem da logo" />
        </header>
      </div>
      <section className="row-span-5 flex justify-center items-start flex-col px-4 sm:w-80 mx-auto sm:mx-0">
        <form
          className="sm:w-80 flex flex-col md:justify-end justify-center items-center border rounded-md px-10 py-5 gap-5"
          onSubmit={handleSubmit}
        >
          <h3 className="text-center text-2xl font-semibold">Login</h3>
          <div>
            <CampoInput
              label="Email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Digite seu Email"
              name="email"
            />
          </div>
          <div>
            <CampoInput
              label="Senha"
              type="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Digite sua Senha"
              name="password"
            />
            <div className="mt-3 flex justify-end items-center">
              <Link
                to="/Forgot"
                className="cursor-pointer text-blue-950 hover:border-b-2 hover:border-gray-900y"
              >
                Esqueceu a senha?
              </Link>
            </div>
            <div>
              <button
                className="mt-3 cursor-pointer bg-yellow-400 font-normal w-full h-8 rounded-sm hover:bg-yellow-500"
                type="submit"
              >
                Login
              </button>
            </div>
            <div className="flex justify-center items-center">
              <button
                className="mt-4 cursor-pointer overflow-hidden font-normal bg-gray-500 text-yellow-400 w-6/12 h-8 rounded-sm hover:bg-gray-700"
                type="button"
                onClick={() => navigate("/Cadastro")}
              >
                Cadastrar-se
              </button>
            </div>
          </div>
        </form>
      </section>
      <div className="fixed mx-auto bottom-0 w-full flex justify-center  bg-stone-300 font-semibold p-3">
        <Footer />
      </div>
    </div>
  );
}

export default Login;
