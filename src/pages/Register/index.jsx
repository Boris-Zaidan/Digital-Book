import React from "react";
import { useRef, useState, useEffect } from "react";
import { Navigate } from "react-router-dom";

function Register() {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [profession, setProfession] = useState("");
  const [serviceStation, setServiceStation] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassWord] = useState("");

  const nameRef = useRef(null);
  const surnameRef = useRef(null);
  const emailRef = useRef(null);
  const professionRef = useRef(null);
  const serviceStationRef = useRef(null);
  const phoneRef = useRef(null);
  const passwordRef = useRef(null);

  useEffect(() => {
    nameRef.current.value = "";
    surnameRef.current.value = "";
    emailRef.current.value = "";
    professionRef.current.value = "";
    serviceStationRef.current.value = "";
    phoneRef.current.value = "";
    passwordRef.current.value = "";
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("usuário cadastrado com sucesso!");

    nameRef.current.value = "";
    surnameRef.current.value = "";
    emailRef.current.value = "";
    professionRef.current.value = "";
    serviceStationRef.current.value = "";
    phoneRef.current.value = "";
    passwordRef.current.value = "";
  };

  return (
    <div className="w-screen h-screen flex justify-center items-center flex-col bg-stone-300 overflow-hidden">
      <div className="fixed top-0 w-full flex justify-center flex-wrap bg-yellow-400">
        <h1 className="text-lg p-1.5 font-medium">Cadastro De Funcionários</h1>
      </div>
      <main className=" w-10/12 md:w-4/5  mx-auto flex justify-center items-center mt-10 border rounded-md">
        <form
          className="sm:w-full md:w-7/10 flex flex-col md:justify-end justify-center items-center  px-10 py-3  gap-5 "
          onSubmit={handleSubmit}
        >
          <div className="w-full">
            <label className="font-normal" htmlFor="name">
              Nome
            </label>
            <input
              className="bg-slate-50 h-8 w-full pl-3 border rounded-sm mt-1 focus:outline-none"
              ref={nameRef}
              type="text"
              id="name"
              placeholder="Digite seu Nome"
              autoComplete="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="w-full">
            <label className="font-normal" htmlFor="surname">
              Sobrenome
            </label>
            <input
              className="bg-slate-50 h-8 w-full pl-3 border rounded-sm mt-1 focus:outline-none"
              ref={surnameRef}
              type="text"
              id="surname"
              placeholder="Digite seu Sobrenome"
              autoComplete="family-name"
              value={surname}
              onChange={(e) => setSurname(e.target.value)}
              required
            />
          </div>
          <div className="w-full">
            <label className="font-normal" htmlFor="email">
              Email
            </label>
            <input
              className="bg-slate-50 h-8 w-full pl-3 border rounded-sm mt-1 focus:outline-none"
              ref={emailRef}
              type="email"
              id="email"
              placeholder="Digite seu e-mail "
              title="Digite seu e-mail no formato exemplo@dominio.com"
              autoComplete="email"
              pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="w-full">
            <label className="font-normal" htmlFor="profession">
              Profissão
            </label>
            <input
              className="bg-slate-50 h-8 w-full pl-3 border rounded-sm mt-1 focus:outline-none"
              ref={professionRef}
              type="text"
              id="profession"
              placeholder="Digite sua Profissão"
              autoComplete="organization-title"
              value={profession}
              onChange={(e) => setProfession(e.target.value)}
              required
            />
          </div>
          <div className="w-full">
            <label className="font-normal" htmlFor="serviceStation">
              Posto de Serviço
            </label>
            <input
              className="bg-slate-50 h-8 w-full pl-3 border rounded-sm mt-1 focus:outline-none"
              ref={serviceStationRef}
              type="text"
              id="serviceStation"
              placeholder="Digite seu local de Serviço"
              autoComplete="organization"
              value={serviceStation}
              onChange={(e) => setServiceStation(e.target.value)}
              required
            />
          </div>
          <div className="w-full">
            <label className="font-normal" htmlFor="phone">
              Telefone
            </label>
            <input
              className="bg-slate-50 h-8 w-full pl-3 border rounded-sm mt-1 focus:outline-none"
              ref={phoneRef}
              type="tel"
              id="phone"
              placeholder="Ex: (32) 99149-0000"
              autoComplete="tel"
              pattern="^\(\d{2}\) \d{5}-\d{4}$"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>
          <div className="w-full">
            <label className="font-normal" htmlFor="password">
              Senha
            </label>
            <input
              className="bg-slate-50 h-8 w-full pl-3 border rounded-sm mt-1 focus:outline-none"
              ref={passwordRef}
              type="password"
              id="password"
              placeholder="Digite sua Senha"
              autoComplete="new-password"
              value={password}
              onChange={(e) => setPassWord(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="mt-5 bg-yellow-400 px-4 py-2 rounded-md w-full focus:outline-none"
            onClick={() => Navigate("/")}
          >
            Cadastrar
          </button>
        </form>
      </main>
    </div>
  );
}

export default Register;
