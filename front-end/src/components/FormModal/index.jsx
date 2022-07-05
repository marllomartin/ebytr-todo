import React, { useContext } from "react";
import { TaskContext } from "../../context/TaskContext";
import { Overlay, Container, Header, CloseIcon, FormContainer, FormMain, InputGroup, Footer, CheckIcon } from './styles';

export default function FormModal() {

  const { handleCloseModal, name, handleChangeName, handleChangeStatus, handleSubmit } = useContext(TaskContext);

  return (
    <Overlay>
      <Container>
        <Header>
          <strong>New task</strong>
          <button type="button" onClick={handleCloseModal}>
            <CloseIcon />
          </button>
        </Header>
        <FormContainer onSubmit={handleSubmit}>
          <FormMain>
            <InputGroup>
              <label htmlFor="name">Nome: </label>
              <input
                id="name"
                type="text"
                placeholder="task name"
                value={name}
                onChange={handleChangeName}
              />
            </InputGroup>
            <InputGroup>
              <label htmlFor="status">Status: </label>
              <select
                id="status"
                defaultValue="Pendente"
                onChange={handleChangeStatus}
              >
                <option value="Pendente">Pendente</option>
                <option value="Em andamento">Em andamento</option>
                <option value="Concluído">Concluído</option>
              </select>
            </InputGroup>
          </FormMain>
          <Footer>
            <button type="submit">
              <CheckIcon />
            </button>
          </Footer>
        </FormContainer>
      </Container>
    </Overlay>
  )
}
