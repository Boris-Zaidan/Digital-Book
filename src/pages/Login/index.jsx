import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../../assets/login.png";
import Footer from "../../Components/Footer";

function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const emailRef = useRef(null);
  const senhaRef = useRef(null);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    emailRef.current.value = "";
    senhaRef.current.value = "";
  };

  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center bg-stone-300 overflow-hidden">
      <header className="hidden md:flex justify-end items-center">
        <img className="max-w-sm" src={Logo} alt="imagem da logo" />
      </header>

      <main className="w-full flex justify-center items-center mt-4 px-4 sm:w-80">
        <section
          aria-labelledby="login-form"
          className="w-full sm:w-80 flex flex-col items-center border rounded-md px-6 py-4 gap-4 bg-white"
        >
          <h1 id="login-form" className="text-center text-2xl font-semibold">
            Login
          </h1>
          <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4">
            <div>
              <label htmlFor="email" className="font-normal">
                Email
              </label>
              <input
                ref={emailRef}
                type="email"
                id="email"
                className="bg-slate-50 h-8 w-full pl-3 border rounded-sm mt-1"
                placeholder="Digite seu email"
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="senha" className="font-normal">
                Senha
              </label>
              <input
                ref={senhaRef}
                type="password"
                id="senha"
                className="bg-slate-50 h-8 w-full pl-3 border rounded-sm mt-1"
                placeholder="Digite sua senha"
                autoComplete="current-password"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
                required
              />
            </div>
            <div className="w-full mt-2 text-right">
              <a href="#" className="text-sm text-neutral-700 cursor-pointer">
                Esqueceu a senha?
              </a>
            </div>
            <button
              type="submit"
              className="w-full h-10 bg-yellow-400 font-normal rounded-sm hover:bg-yellow-500"
            >
              Entrar
            </button>
            <button
              type="button"
              className="w-6/12 h-8 mt-2 bg-gray-500 text-yellow-400 font-normal rounded-sm hover:bg-gray-700"
              onClick={() => navigate("/Register")}
            >
              Cadastrar-se
            </button>
          </form>
        </section>
      </main>

      <footer className="fixed bottom-0 w-full flex justify-center bg-stone-300">
        <Footer />
      </footer>
    </div>
  );
}

export default Login;
