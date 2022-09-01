import React, { useContext } from "react";
import { TaskContext } from "../../context/TaskContext";
import { Overlay, Container, Header, CloseIcon, FormContainer, FormMain, InputGroup, Footer, CheckIcon } from './styles';

export default function FormModal() {

  const { handleCloseModal, title, description, status, handleChangeTitle, handleChangeDescription, handleChangeStatus, handleSubmit } = useContext(TaskContext);

  return (
    <Overlay>
      <Container>
        <Header>
          <strong>{title? title : "Nova tarefa"}</strong>
          <button type="button" onClick={handleCloseModal}>
            <CloseIcon />
          </button>
        </Header>
        <FormContainer onSubmit={handleSubmit}>
          <FormMain>
            <InputGroup>
              <label htmlFor="title">Título: </label>
              <input
                id="title"
                type="text"
                placeholder="Nome da tarefa"
                value={title}
                onChange={handleChangeTitle}
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
            <hr />
            <InputGroup>
              <label htmlFor="descrição">Descrição: </label>
              <textarea
                id="description"
                type="text"
                placeholder="Breve descrição do que há para ser feito"
                value={description}
                onChange={handleChangeDescription}
              />
            </InputGroup>
            <Footer>
            <button type="submit">
              <CheckIcon />
            </button>
          </Footer>
          </FormMain>
        </FormContainer>
      </Container>
    </Overlay>
  )
}
