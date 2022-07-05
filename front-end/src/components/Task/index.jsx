import React from "react";
import PropTypes from 'prop-types';
import { IoPencil, IoTrashSharp } from "react-icons/io5"
import { Container, ButtonArea, ButtonEdit, ButtonDelete } from "./styles";

export function Task({ id, name, status }) {

  return (
    <li>
      <Container>
        <h1>{id}</h1>
        <h2>{name}</h2>
        <h3>{status}</h3>
        <ButtonArea>
          <ButtonEdit>
            <IoPencil />
          </ButtonEdit>
          <ButtonDelete>
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
