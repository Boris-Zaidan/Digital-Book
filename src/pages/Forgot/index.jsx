import React, { useState } from "react";
import Logo from "../../assets/forgot.png";
import Footer from "../../Components/Footer/index";
import CampoInput from "../../Components/Input";
import { useNavigate } from "react-router-dom";
import api from "../../Services/Api";

function Forgot() {
  const [formData, setFormData] = useState({ email: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.email) {
      alert("Por favor, insira um e-mail válido.");
      return;
    }

    try {
      const response = await api.post("/forgot-password", formData);
      localStorage.setItem("token", response.data.token);
      alert(response.data.message);
      setFormData({ email: "" });
      navigate("/ResetPassword");
    } catch (error) {
      alert(
        error.response?.data?.error ||
          "Erro ao enviar o formulário. Tente novamente."
      );
    }
  };

  return (
    <div className="w-screen max-h-screen flex justify-center items-center">
      <main className="w-[92%] flex justify-center items-center mt-4 sm:max-w-screen-sm  sm:mt-16 md:mt-24  md:max-w-screen-md">
        <section className="w-full  mt-6 p-2 flex justify-center items-center flex-col sm:flex-row shadow-sm rounded-md">
          <div className="w-full flex justify-center items-center flex-col sm:flex-row py-8 overflow-hidden">
            <div className="sm:w-1/2 md:w-9/12 flex justify-center items-center">
              <img
                className="max-w-xs object-cover p-3"
                src={Logo}
                alt="Recuperar senha"
              />
            </div>
            <form
              className="w-full flex flex-col justify-center items-center px-10 py-5 gap-4 sm:w-1/2 md:w-9/12"
              onSubmit={handleSubmit}
            >
              <CampoInput
                label="Email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Digite seu Email"
                name="email"
              />
              <button
                className="h-9 w-full px-3 font-normal bg-gray-500 text-yellow-400 rounded-sm hover:bg-gray-700"
                type="submit"
              >
                Recuperar Senha
              </button>
            </form>
          </div>
        </section>
      </main>
      <div className="fixed mx-auto bottom-0 w-full flex justify-center  bg-stone-300  p-3 font-semibold">
        <Footer />
      </div>
    </div>
  );
}

export default Forgot;
