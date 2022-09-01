import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 50px;
  padding: 0px 10px;
  margin-top: 40px;
  margin-bottom: 50px;

  justify-content: center;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-evenly;
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 25px;
  color: #ededed;

  label {
    font-size: 20px;
  }

  input {
    border: none;
    background-color: white;

    height: 40px;
    width: 100%;
    padding-left: 10px;
  }

  select {
    border: none;
    background-color: white;

    height: 40px;
    width: 100%;
    padding: 10px;
  }
`;
