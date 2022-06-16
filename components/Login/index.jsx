import { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import Router from "next/router";
import { notification } from "antd";

import { AiFillInstagram, AiOutlineGoogle } from "react-icons/ai";
import ScaleLoader from "react-spinners/ScaleLoader";
import * as S from "./styles";

export default function Login() {
  const { register, handleSubmit } = useForm();
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (data) => {
    setIsLoading(true);
    await axios
      .post(
        `${process.env.BASE_API_URL}/token/`,
        {
          email: data.email,
          password: data.password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        if(response.data.access) {
          console.log(response.data.access)
          localStorage.setItem('access', response.data.access)
          localStorage.setItem('refresh', response.data.refresh)
          Router.push('/dashboard')
        }
      })
      .catch((error) => {
        const { data } = error.response;
        Object.entries(data).map((element, index) => {
          return notification.error({
            message: element[0],
            description: element[1],
            duration: 2.5,
          });
        });
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <S.Container>
      <div className="background-image">
        <img className="Imagemtoda" src="" />
        <section id="tudo1">
          <main className="principal1">
            <h2>Login</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="classes1">
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Coloque seu email"
                  autoComplete="new-password"
                  requeired="true"
                  {...register("email")}
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
                  {...register("password")}
                />
                <div className="underline"></div>
              </div>

              <button
                disabled={isLoading}
                className="botao-submit"
                type="submit"
              >
                {isLoading ? (
                  <ScaleLoader width={3} height={10} color="#f1f1f1" />
                ) : (
                  "Login"
                )}
              </button>
            </form>
            <div className="esquecisenha">
              <a
                className="Esqs"
                onClick={() => Router.push("/esqueci-a-senha")}
              >
                Esqueci a Senha
              </a>
              <a className="Esqs" onClick={() => Router.push("/cadastro")}>
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
