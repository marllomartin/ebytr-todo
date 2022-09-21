import React, { useContext } from "react";
import PropTypes from 'prop-types';
import { TaskContext } from "../../context/TaskContext";
import { BsPencilFill, BsTrashFill } from "react-icons/bs"
import { Container, ButtonArea, ButtonEdit, ButtonDelete } from "./styles";

export function Task({ id, title, description, status, handleDeleteTask }) {
  const {
    setOpenFormModal,
    setId,
    setTitle,
    setStatus,
    setDescription
  } = useContext(TaskContext);

  const handleEditTask = (id, title, status, description) => {
    setOpenFormModal(true);
    setId(id);
    setTitle(title);
    setStatus(status);
    setDescription(description);
  }

  return (
    <li>
      <Container>
        <h2 className="title">{title}</h2>
        <h2 className="status" data-status={status}>{status}</h2>
        <hr />
        <p className="description">{description}</p>
        <ButtonArea>
          <ButtonEdit onClick={() => handleEditTask(id, title, status, description)}>
            <BsPencilFill />
          </ButtonEdit>
          <ButtonDelete onClick={() => handleDeleteTask(id)}>
            <BsTrashFill />
          </ButtonDelete>
        </ButtonArea>
      </Container>
    </li>
  )
}

Task.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  status: PropTypes.string,
}.isRequired;
