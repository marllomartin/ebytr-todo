import React, { useContext } from 'react';
import { Container, InputGroup } from "./styles";
import { TaskContext } from "../../context/TaskContext";

export default function Filter() {
  const { titleFilter, setTitleFilter, setStatusFilter } = useContext(TaskContext);

  return (
    <Container>
      <InputGroup>
        <label htmlFor="status">Título: </label>
        <input
          id="title"
          className="title-input"
          type="text"
          value={titleFilter}
          placeholder="Pesquisar tarefa por título"
          onChange={(e) => setTitleFilter(e.target.value)}
        />
      </InputGroup>

      <InputGroup>
        <label htmlFor="status">Status: </label>
        <select
          id="status"
          defaultValue=""
          onChange={(e) => setStatusFilter(e.target.value)}
        >
          <option value="">Todos</option>
          <option value="pendente">Pendente</option>
          <option value="em andamento">Em andamento</option>
          <option value="concluído">Concluído</option>
        </select>
      </InputGroup>
    </Container>
  );
}
