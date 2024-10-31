import React from "react";
import Logo from "../../assets/login.png";

function Login() {
  return (
    <div>
      <div>
        <header>
          <img src={Logo} alt="imagem da logo" />
          <h1>Padronização, Organização e Meticulosidade</h1>
        </header>
      </div>
      <section>
        <div>
          <h2>Login</h2>
        </div>
        <form>
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Digite seu email"
              autoComplete="email"
              required
            />
          </div>
          <div>
            <label htmlFor="senha">Senha</label>
            <input
              type="password"
              id="senha"
              placeholder="Digite sua senha"
              autoComplete="current-password"
              required
            />
          </div>
          <div>
            <a href="#">Esqueceu a senha?</a>
          </div>
          <div>
            <button type="submit">Entrar</button>
          </div>
          <div>
            <button type="button">Cadastrar</button>
          </div>
        </form>
      </section>
    </div>
  );
}

export default Login;
