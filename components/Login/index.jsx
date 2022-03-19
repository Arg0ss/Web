import React, { useState } from "react";
import * as S from "./styles";

import { FiArrowRight, FiLogIn, FiArrowLeft } from "react-icons/fi";

import { styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";

const Input = styled(TextField)({
  "& fieldset": {
    borderColor: "#007FFF",
  },

  "&:hover fieldset": {
    borderColor: "#007FFF !important",
  },

  "& input": {
    color: "#007FFF",
    fontFamily: "Poppins",
  },

  "& input:valid:focus + fieldset": {
    borderColor: "#007FFF",
    borderWidth: 1,
  },

  "& label": {
    color: "#007FFF",
    fontFamily: "Poppins",
  },

  "& label.Mui-focused": {
    color: "#007FFF",
  },

  "& .Mui-focused .MuiOutlinedInput-notchedOutline": {
    borderColor: "#007FFF !important",
    borderWidth: "1px !important",
  },
});

export default function Login() {
  const [otherMedia, setOtherMedia] = useState(false);
  return (
    <S.Container>
      <div className="col1">undefined</div>
      <div className="col2">
        {otherMedia ? (
          <S.loginCard>
            <header>
              <h3>Login</h3>
            </header>
            <S.socialCard background="#007fff">
              Conecte com o Google <FiLogIn />
            </S.socialCard>
            <S.socialCard background="#007fff">
              Conecte com o Pinterest <FiLogIn />
            </S.socialCard>

            <S.socialCard background="#007fff">
              Conecte com o Instagram <FiLogIn />
            </S.socialCard>
            <div
              onClick={() => setOtherMedia(!otherMedia)}
              className="connects"
            >
              <FiArrowLeft /> ou conecte com seu login e senha
            </div>
          </S.loginCard>
        ) : (
          <S.loginCard>
            <header>
              <h3>Login</h3>
            </header>
            <form action="">
              <Input
                label="email"
                placeholder="email"
                margin="dense"
                autoComplete="no-fill"
                fullWidth
                focused
              />
              <Input
                type={"password"}
                label="password"
                placeholder="password"
                margin="dense"
                autoComplete="no-fill"
                fullWidth
                focused
              />
              <button>
                <FiLogIn />
              </button>
              <div className="infos">
                <a href="/">esqueci a senha</a>
                <a href="/">cadasta-se</a>
              </div>
              <div
                onClick={() => setOtherMedia(!otherMedia)}
                className="connects"
              >
                ou conecte pelas suas midias sociais <FiArrowRight />
              </div>
            </form>
          </S.loginCard>
        )}
      </div>
    </S.Container>
  );
}
