import React from "react";
import Router from "next/router";
import { AiFillInstagram, AiOutlineGoogle } from "react-icons/ai";
import * as S from "./styles";

export default function Login() {
  return (
    <S.Container>
      <div className="background-image">
        <img className="Imagemtoda" src="" />
        <section id="tudo1">
          <main className="principal1">
            <h2>Login</h2>
            <form action="">
              <div className="classes1">
                <label>Email</label>
                <input
                  type="e-mail"
                  name="username"
                  placeholder="Coloque seu email"
                  autoComplete="new-password"
                  requeired="true"
                />
                <div className="underline"></div>
              </div>
              <div className="classes1">
                <label> Senha </label>
                <input
                  type="password"
                  name="password"
                  placeholder="Coloque sua senha"
                />
                <div className="underline"></div>
              </div>

              <input type="button" value="Login" />
            </form>
            <div className="esquecisenha">
              <a className="Esqs" onClick={() => Router.push('/esqueci-a-senha')}>
                Esqueci a Senha
              </a>
              <a className="Esqs" onClick={() => Router.push('/cadastro')}>
                Cadastra-se
              </a>
            </div>
            <div className="midias">
              <span>Ou conecte pelas suas midias sociais</span>
              <div className="social-field facebook">
                <AiOutlineGoogle color="#fff" size={17} />
                <a className="Conectar" href="#">
                  Conecte com o Google
                </a>
              </div>
              <div className="twitter">
                <div className="social-field twitter">
                  <AiFillInstagram color="#fff" size={17} />
                  <a className="Conectar" href="#">
                    Conecte com o Instagram
                  </a>
                </div>
              </div>
            </div>
          </main>
        </section>
      </div>
      <div></div>
    </S.Container>
  );
}
