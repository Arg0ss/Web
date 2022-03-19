import styled from "styled-components";

export const Container = styled.section`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .col1 {
    width: 50%;
    display: grid;
    place-content: center;
  }

  .col2 {
    width: 50%;
    display: grid;
    place-content: center;
  }
`;

export const Wrapper = styled.div`
  max-width: 1080px;
  margin: 0 auto;
`;

export const socialCard = styled.div`
  width: 100%;
  height: 56px;
  font-size: 1rem;
  border: 1px solid ${(props) => props.background};
  font-family: Poppins;
  color: ${(props) => props.background};
  border-radius: 4px;
  cursor: pointer;
  margin-top: 4px;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
`;

export const loginCard = styled.div`
  width: 400px;
  height: 100%;
  border-radius: 5px;
  padding: 20px;

  header {
    h3 {
      margin-bottom: 4px;
      color: #007fff;
      font-size: 25px;
      text-decoration: underline;
      text-decoration-color: #007fff78;
    }
  }

  .infos {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 4px;
    margin-bottom: 8px;

    a {
      color: #007fff;
      text-decoration: none;
    }
  }

  .connects {
    color: #007fff;
    width: 100%;
    border-top: 1px solid #87c3ff;
    padding-top: 8px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
  }

  button {
    width: 100%;
    height: 56px;
    font-size: 1rem;
    background: #007fff;
    font-family: Poppins;
    color: #fff;
    border-radius: 4px;
    margin: 4px 0px;
    line-height: 0;
    cursor: pointer;
  }
`;
