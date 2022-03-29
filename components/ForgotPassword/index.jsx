import React from "react";
import Router from "next/router";
import * as S from "./styles";

export default function ForgotPassword() {
  return (
    <S.Container>
      <div className="background-image">
        <img className="Imagemtoda" src="" />
        <section id="tudo1">
          <main className="principal2">
            <div className="header">
            <h2>Recuperar Conta</h2>
            <label className="recuperar">Digite o E-mail da conta que sera recuperada</label>
            </div>
            <form action="/reenviar">
              <div className="classes1">
                <input
                  className="recuperar"
                  type="email"
                  name="username"
                  placeholder="Coloque seu email"
                  autoComplete="new-password"
                  requeired="true"
                />
                <div className="underline"></div>
              </div>
              <a href="/reenviar">
                <input className="botao" type="button" value="Enviar" />
              </a>
            </form>
            <div className="esquecisenha">
              <a className="Esqs" onClick={() => Router.push('/')}>
                Voltar
              </a>
            </div>
          </main>
        </section>
      </div>
    </S.Container>
  );
}
