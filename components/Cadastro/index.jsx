import React from "react";
import Router from "next/router";
import * as S from "./styles";

export default function Cadastro() {
  return (
    <S.Container>
      <div className="background-image">
        <img className="Imagemtoda" src="" />
        <section id="tudo1">
          <main className="principal1">
            <h2>Cadastro</h2>
            <form action="">
              <div className="classes1">
                <label>Email</label>
                <input
                  type="email"
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
                  autoComplete="new-password"
                  requeired="true"
                />
                <div className="underline"></div>
              </div>
              <div className="classes1">
                <p className="Repetir">Senha</p>
                <input
                  type="password"
                  placeholder="Repita sua senha"
                  autoComplete="new-password"
                  requeired="true"
                />
                <div className="underline"> </div>
              </div>
              <a href="/cadastro1">
                <input className="botao" type="button" value="Cadastrar" />
              </a>
            </form>
            <div className="reflogin">
              <p>Caso ja tenha uma conta:</p>
              <a className="Esqs" onClick={() => Router.push('/')}>
                {" "}
                Login
              </a>
            </div>
          </main>
        </section>
      </div>
    </S.Container>
  );
}