import React, { useCallback, useContext, useEffect } from "react";
import { TaskContext } from "../../context/TaskContext";
import { createTask, getTasks, updateTask } from "../../services/api";
import { Overlay, Container, Header, CloseIcon, FormContainer, FormMain, InputGroup, Footer, CheckIcon } from './styles';

export default function FormModal() {

  const {
    setTaskList,
    setOpenFormModal,
    setIsLoading,
    id, setId,
    title, setTitle, handleChangeTitle,
    description, setDescription, handleChangeDescription,
    status, setStatus, handleChangeStatus,
    handleCloseModal
  } = useContext(TaskContext);

  const loadData = useCallback(async () => {
    try {
      setIsLoading(true);
      const responseTasks = await getTasks();
      setTaskList(responseTasks.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  }, [setTaskList]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (id) {
      await updateTask(id, title, status, description);
    } else {
      await createTask(title, status, description);
    }

    setTitle("");
    setDescription("");
    setStatus("Pendente");
    setId(false);
    setOpenFormModal(false);

    await loadData();
  }

  useEffect(() => {
    loadData();
  }, [loadData])

  return (
    <Overlay>
      <Container>
        <Header>
          <strong>{title ? title : "Nova tarefa"}</strong>
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
                required={true}
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
