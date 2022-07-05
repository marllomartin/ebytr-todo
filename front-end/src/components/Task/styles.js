import styled from "styled-components";

export const Container = styled.div`
  background: #ffffff;
  padding: 10px;
  height: 200px;
  width: 250px;

  border-radius: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.08);

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  h2 {
    color: #1e1e1e;
    font-size: 20px;
    text-align: center;
  }

  h3 {
    max-width: 230px;
    font-size: 17px;

    color: #999999;
  }
`;

export const ButtonArea = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
`;

export const ButtonEdit = styled.button`
  border: none;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  background: #E2E0CA;
  cursor: pointer;

  transition: 0.5s;

  svg {
    height: 20px;
    width: 20px;
    color: #1e1e1e;
  }

  &:hover {
    background-color: #406e77;

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
  background: #E2E0CA;
  cursor: pointer;

  transition: 0.5s;

  svg {
    height: 20px;
    width: 20px;
    color: #1e1e1e;
  }

  &:hover {
    background-color: #a83935;

    svg {
    color: #ffffff;
  }
  }
`;
