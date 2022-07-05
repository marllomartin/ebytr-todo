import React, { useContext } from "react";
import PropTypes from 'prop-types';
import { TaskContext } from "../../context/TaskContext";
import { BsPencilFill, BsTrashFill } from "react-icons/bs"
import { Container, ButtonArea, ButtonEdit, ButtonDelete } from "./styles";

export function Task({ id, name, status }) {
  const { handleEdit, handleDelete } = useContext(TaskContext);

  return (
    <li>
      <Container>
        <h2>{name}</h2>
        <h3>{status}</h3>
        <ButtonArea>
          <ButtonEdit onClick={() => handleEdit(id, name, status)}>
            <BsPencilFill />
          </ButtonEdit>
          <ButtonDelete onClick={() => handleDelete(id)}>
            <BsTrashFill />
          </ButtonDelete>
        </ButtonArea>
      </Container>
    </li>
  )
}

Task.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  status: PropTypes.string,
}.isRequired;
