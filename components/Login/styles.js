import styled from "styled-components";

export const Container = styled.section`
.background-image {
  min-height: 100vh;
  min-width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
}

main.principal1 {
  background: white;
  min-width: 320px;
  min-height: 40vh;
  padding: 2rem;
  box-shadow: 5px 5px 15px rgb(0 0 0 / 20%);
  border-radius: 8px;
  width: 400px;
  height: 600px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

main h2 {
  font-weight: 600;
  position: relative;
}

main h2::before {
  content: '';
  position: absolute;
  height: 4px;
  width: 25px;
  bottom: 3px;
  left: 0;
  border-radius: 8px;
  background: linear-gradient(45deg, #8e2de2, #4a00e0);
}

form {
  display: flex;
  flex-direction: column;
}

.classes1 {
  position: relative;
  margin-bottom: 25px;
  width: 100%;
}

form .classes1:first-child {s
  margin-bottom: 1.5rem;
}

.classes1 .underline::before {
  content: '';
  position: absolute;
  height: 1px;
  width: 100%;
  bottom: -5px;
  left: 0;
  background: rgba(0,0,0,0.2);
}

.esquecisenha {
  display: flex;
    justify-content: space-between;
}

.classes1 .underline::after {
  content: '';
  position: absolute;
  height: 1px;
  width: 100%;
  bottom: -5px;
  left: 0;
  background: linear-gradient(45deg, #8e2de2, #4a00e0);
  transform: scaleX(0);
  transition: all .3s ease-in-out;
  transform-origin: left;
}

.classes1 input:focus ~ .underline::after {
  transform: scaleX(1);
}

.classes1 input {
  outline: none;
  font-size: 0.9rem;
  color: rgba(0, 0, 0, 0.7);
  width: 100%;
}

.classes1 input::placeholder {
  color: rgba(0, 0, 0, 0.5);
}

form input[type="button"] {
  margin-top: 1rem;
  padding: 10px;
  width: 100%;
  background: linear-gradient(to left, #333ea8, #5f2cb0);
  cursor: pointer;
  color: white;
  font-size: 0.9rem;
  font-weight: 300;
  border-radius: 4px;
  transition: all 0.3s ease;
}

form input[type="button"]:hover {
  letter-spacing: 0.5px;
  background: linear-gradient(to right, #333ea8, #5f2cb0    );
}

.midias {
  display: flex;
  flex-direction: column;
}

.midias span {
  color: rgba(0, 0, 0, 0.7);
  font-size: 0.8rem;
  text-align: center;
}

.midias .social-field {
  padding: 10px;
  border-radius: 4px;
  font-size: 0.85rem;
  width: 100%;
  cursor: pointer;
  margin-top: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.midias .social-field a i {
  margin: 0 0.5rem;
  width: 15px;
}

.midias .social-field a {
  text-decoration: none;
  color: white;
}

.midias .social-field.twitter {
  background: linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%);
}

.midias .social-field.facebook {
  background: #ea4335;
}

.reflogin {
  font-size:0.8rem
}
.background-image {
  width: 55%;
  height: 85%;
  left: 0;
  top: 0;
  position: absolute;
  background-image: url(hhttps://media.discordapp.net/attachments/902364046483939418/930648288959528991/Image.png?width=1191&height=670)no-repeat;
  display:flex;
  margin-right: auto;
}
.Imagemtoda {
  width: 500px;
  margin-bottom:10px;
  margin-left:500px
}
.Google {
  color: blue
}
.Conectar {
  margin-left: 20px;
}
.Esqs:hover {
  text-decoration:underline;
  color:blue;
}
.Esqs {
  font-size:.8rem;
  display: inline-block;
  text-decoration: none;
}
`;
