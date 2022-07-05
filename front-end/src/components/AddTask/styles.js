import styled from "styled-components";

import { IoAdd } from "react-icons/io5"

export const AddTaskButton = styled.button`
  list-style: none;
  border: 5px dashed #E2E0CA;
  background-color: rgba(0, 0, 0, 0.04);

  padding: 10px;
  margin: 5px;
  height: 200px;
  width: 250px;
  cursor: pointer;

  border-radius: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.08);

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  transition: 0.5s;

  &:hover {
    border: 5px dashed #ffffff;
    background-color: rgba(0, 0, 0, 0.5);
  }
`;

export const AddIcon = styled(IoAdd)`
  stroke: #ffffff;
  width: 64px;
  height: 64px;
`;
