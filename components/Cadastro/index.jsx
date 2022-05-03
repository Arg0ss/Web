import React, { useState } from "react";
import Router from "next/router";
import axios from "axios";
import { useForm } from "react-hook-form";
import ScaleLoader from "react-spinners/ScaleLoader";
import InputMask from "react-input-mask";
import { FiArrowLeft } from "react-icons/fi";
import { notification } from "antd";

import * as S from "./styles";

export default function Cadastro() {
  const { register, handleSubmit } = useForm();
  const [error, setError] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [steps, setSteps] = useState(0);
  const onSubmit = (data) => {
    setIsLoading(true);
    axios
      .post(
        "https://cors-anywhere.herokuapp.com/https://drf-criptomentor.herokuapp.com/api/v1/createUser",
        {
          email: data.email,
          username: data.username,
          password: data.password,
          password_confirm: data.password_confirm,
          tel: data.tel,
          data_nascimento: data.data_nascimento,
          cpf: data.cpf,
          pfp: null,
          premium: false,
          created_at: "2022-04-12",
          is_superuser: false,
          is_staff: false,
        },
        {
          headers: {
            "Content-Type": "application/json; charset=utf-8",
            "Access-Control-Allow-Origin": "*",
          },
        }
      )
      .then((response) => {
        console.log(response);
        setIsLoading(true);

        notification.success({
          message: "Parabéns! Create Account",
          description:
            "Parabéns! Não tenho palavras para descrever o quão especial você é para mim",
          duration: 2.5,
        });
      })
      .catch((error) => {
        const { data } = error.response;
        setError(data);

        const ErrosStepOne = [
          "email",
          "username",
          "password",
          "password_confirm",
        ];

        ErrosStepOne.map((erro, index) => {
          Object.entries(data).filter(function (element, index) {
            if (element[0] === erro) {
              setSteps(0);
            }
          });
        });

        Object.entries(data).map((element, index) => {
          console.log(element);
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
        {/* <img className="Imagemtoda" src="" /> */}
        <section id="tudo1">
          <main className="principal1">
            {steps === 1 && (
              <span onClick={() => setSteps(0)} className="button-back">
                <FiArrowLeft color="#FFF" size={17} />
              </span>
            )}
            <h2>Cadastro</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
              {steps === 0 && (
                <>
                  <div className="classes1">
                    <div className="subtitle">
                      <p>email</p>{" "}
                    </div>
                    <S.Input
                      type="email"
                      name="username"
                      placeholder="Coloque seu email"
                      autoComplete="new-password"
                      requeired="true"
                      {...register("email")}
                    />
                    <S.Underline error={error.email && true} />
                  </div>
                  <div className="classes1">
                    <div className="subtitle">
                      <p>username</p>
                    </div>
                    <S.Input
                      name="username"
                      placeholder="Coloque seu username"
                      autoComplete="new-password"
                      requeired="true"
                      {...register("username")}
                    />
                    <S.Underline error={error.username && true} />
                  </div>
                  <div className="classes1">
                    <div className="subtitle">
                      <p>password</p>
                    </div>
                    <S.Input
                      type="password"
                      name="password"
                      placeholder="Coloque sua senha"
                      autoComplete="new-password"
                      requeired="true"
                      {...register("password")}
                    />
                    <S.Underline error={error.password && true} />
                  </div>
                  <div className="classes1">
                    <div className="subtitle">
                      <p>password confirm</p>{" "}
                    </div>
                    <S.Input
                      type="password"
                      name="password"
                      placeholder="Coloque sua senha"
                      autoComplete="new-password"
                      requeired="true"
                      {...register("password_confirm")}
                    />
                    <S.Underline error={error.password_confirm && true} />
                  </div>
                  <button className="botao-submit" onClick={() => setSteps(1)}>
                    Continuar
                  </button>
                </>
              )}
              {steps === 1 && (
                <>
                  <div className="classes1">
                    <div className="subtitle">
                      <p>telefone</p>{" "}
                    </div>
                    <InputMask
                      {...(e) => e}
                      autoComplete="new-password"
                      placeholder="(00) 00000-0000"
                      mask="(99) 99999-9999"
                      beforeMaskedValueChange=" "
                      requeired="true"
                      {...register("tel")}
                    />
                    <S.Underline error={error.tel && true} />
                  </div>

                  <div className="classes1">
                    <div className="subtitle">
                      <p>data nascimento</p>{" "}
                    </div>
                    <InputMask
                      {...(e) => e}
                      autoComplete="new-password"
                      placeholder="00/00/0000"
                      mask="9999-99-99"
                      beforeMaskedValueChange=" "
                      requeired="true"
                      {...register("data_nascimento")}
                    />
                    <S.Underline error={error.data_nascimento && true} />
                  </div>

                  <div className="classes1">
                    <div className="subtitle">
                      <p>cpf</p>
                    </div>
                    <InputMask
                      {...(e) => e}
                      autoComplete="new-password"
                      placeholder="000.000.000-00"
                      mask="999.999.999-99"
                      beforeMaskedValueChange=" "
                      requeired="true"
                      {...register("cpf")}
                    />
                    {/* <S.Input
                  placeholder="CPF"
                  autoComplete="new-password"
                  requeired="true"
                  {...register("cpf")}
                /> */}
                    <S.Underline error={error.cpf && true} />
                  </div>
                  <button
                    disabled={isLoading}
                    className="botao-submit"
                    type="submit"
                  >
                    {isLoading ? (
                      <ScaleLoader width={3} height={10} color="#f1f1f1" />
                    ) : (
                      "Cadastro"
                    )}
                  </button>
                </>
              )}
            </form>
            <div className="reflogin">
              <p>Caso ja tenha uma conta:</p>
              <a className="Esqs" onClick={() => Router.push("/")}>
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
