import styled from "styled-components";

export const Container = styled.section`
display: grid;
place-content: center;
height: 100vh;

.items {
  display: flex;
  align-items: center;

  #color-btn {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    border: none;
    cursor: pointer;
    background-color: transparent;
    height: 31px;
  }
  #color-btn::-webkit-color-swatch {
    border-radius: 3px;
    width: 50px;
    height: 30px;
    margin-top: -4px;
    border: none;
  }

  button {
    border-radius: 3px;
    width: 50px;
    height: 30px;
    margin-top: -4px;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    line-height: 0;
    cursor: pointer;
  }
}
.container-text {
  max-width: 850px;
}
`;

export const Translation = styled.div`
  width: 100%;
  height: 100px;
  padding: 20px 0px;
  background: #030303;
  position: absolute;
  bottom: 0;
  display: grid;
  place-content: center;
  color: #fff;
  transform: translate(0, 120px);
`;
