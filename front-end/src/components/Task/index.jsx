import React, { useContext } from "react";
import PropTypes from 'prop-types';
import { TaskContext } from "../../context/TaskContext";
import { IoPencil, IoTrashSharp } from "react-icons/io5"
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
            <IoPencil />
          </ButtonEdit>
          <ButtonDelete onClick={() => handleDelete(id)}>
            <IoTrashSharp />
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
