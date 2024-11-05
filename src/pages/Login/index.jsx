import React from "react";
import { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../../assets/login.png";
import Footer from "../../Components/Footer";

function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const emailRef = useRef();
  const senhaRef = useRef();
  const navigate = useNavigate();

  useEffect(() => {
    emailRef.current.focus();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    emailRef.current.value = "";
    senhaRef.current.value = "";
  };

  return (
    <div className="w-screen h-screen grid  grid-cols-1  md:grid-cols-2 grid-rows-6 bg-stone-300 overflow-hidden">
      <div className="row-span-5 md:flex justify-end items-center hidden">
        <header>
          <img className="max-w-sm" src={Logo} alt="imagem da logo" />
        </header>
      </div>
      <section className=" row-span-5 flex justify-center items-start flex-col px-4 sm:w-80  mx-auto sm:mx-0 ">
        <form
          className="sm:w-80 flex flex-col md:justify-end justify-center items-center border rounded-md px-10 py-5 gap-5"
          onSubmit={handleSubmit}
        >
          <h3 className="text-center text-2xl font-semibold">Login</h3>
          <div>
            <label className="font-normal" htmlFor="email">
              Email
            </label>
            <input
              className="bg-slate-50 h-8 w-full pl-3 border rounded-sm mt-1 focus:outline-none"
              ref={emailRef}
              type="email"
              id="email"
              placeholder="Digite seu email"
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="font-normal" htmlFor="senha">
              Senha
            </label>
            <input
              className="bg-slate-50 h-8 w-full pl-3 border rounded-sm mt-1 focus:outline-none"
              ref={senhaRef}
              type="password"
              id="senha"
              placeholder="Digite sua senha"
              autoComplete="current-password"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              required
            />
            <div className="mt-3 flex justify-end items-center">
              <a className="cursor-pointer from-neutral-100" href="#">
                Esqueceu a senha?
              </a>
            </div>
            <div>
              <button
                className="mt-3 cursor-pointer bg-yellow-400 font-normal w-full h-8 rounded-sm hover:bg-yellow-500"
                type="submit"
              >
                Entrar
              </button>
            </div>
            <div className="flex justify-center items-center">
              <button
                className="mt-4 cursor-pointer font-normal bg-gray-500 text-yellow-400 w-6/12 h-8 rounded-sm hover:bg-gray-700"
                type="button"
                onClick={() => navigate("/Cadastro")}
              >
                Cadastrar-se
              </button>
            </div>
          </div>
        </form>
      </section>
      <div className="fixed bottom-0 w-full flex justify-center bg-stone-300">
        <Footer />
      </div>
    </div>
  );
}

export default Login;
