import styled from "styled-components";

export const Container = styled.div`
  background: #ffffff;
  padding: 10px;
  margin: 15px;
  height: 330px;
  width: 290px;

  box-shadow: 0 7px 20px rgba(0, 0, 0, 0.5);

  display: flex;
  flex-direction: column;
  align-items: center;

  .title {
    font-size: 20px;
    text-align: center;
    width: 100%;
    margin: 5px;
  }

  hr {
    align-self: center;
    width: 80%;
    border-bottom: none;
    margin: 5px;
  }

  .status {
    font-size: 17px;
    text-align: center;
    width: 100%;
    margin: 5px;
  }
  .status[data-status="Pendente"] {
    color: #DE471C;
  }
  .status[data-status="Em andamento"] {
    color: #F5B311;
  }
  .status[data-status="Concluído"] {
    color: #20b52a;
  }


  .description {
    width: 100%;
    height: 100%;
    margin: 5px;
    font-size: 18px;
    text-align: center;
    overflow-x: hidden;
    overflow-y: scroll;
    text-overflow: ellipsis;
  }

  .description::-webkit-scrollbar {
    width: 5px;
  }
  .description::-webkit-scrollbar-track {
    background: transparent;
  }
  .description:hover::-webkit-scrollbar-thumb {
    background: #888;
  }
`;

export const ButtonArea = styled.div`
  width: 90%;
  margin-top: 10px;
  margin-bottom: 5px;
  display: flex;
  justify-content: space-between;
`;

export const ButtonEdit = styled.button`
  border: none;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  background: #ededed;
  cursor: pointer;

  transition: 0.5s;

  svg {
    height: 20px;
    width: 20px;
    color: #1e1e1e;
  }

  &:hover {
    background-color: #4156C4;

    svg {
    color: #ffffff;
  }
  }
`;

export const ButtonFinish = styled.button`
  border: none;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  background: #ededed;
  cursor: pointer;

  transition: 0.5s;

  svg {
    height: 20px;
    width: 20px;
    color: #1e1e1e;
  }

  &:hover {
    background-color: #85eb9e;

    svg {
    color: #ffffff;
  }
  }
`;

export const ButtonDelete = styled.button`
  border: none;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  background: #ededed;
  cursor: pointer;

  transition: 0.5s;

  svg {
    height: 20px;
    width: 20px;
    color: #1e1e1e;
  }

  &:hover {
    background-color: #db0000;

    svg {
    transition: 0.5s;
    color: #ffffff;
  }
  }
`;
