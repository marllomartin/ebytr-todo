import React, { useContext } from "react";
import { TaskContext } from "../../context/TaskContext";
import { Overlay, Container, Header, CloseIcon, FormContainer, FormMain, InputGroup, Footer, CheckIcon } from './styles';

export default function FormModal() {

  const { handleCloseModal, name, status, handleChangeName, handleChangeStatus, handleSubmit } = useContext(TaskContext);

  return (
    <Overlay>
      <Container>
        <Header>
          <strong>Tarefa</strong>
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
                placeholder="Breve descrição do que há para ser feito"
                value={name}
                onChange={handleChangeName}
                required="true"
              />
            </InputGroup>
            <InputGroup>
              <label htmlFor="status">Status: </label>
              <select
                id="status"
                defaultValue={status}
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
