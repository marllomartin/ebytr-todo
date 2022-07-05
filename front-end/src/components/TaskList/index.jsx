import React from "react";
import { useAxios } from "../../hooks/useAxios";

import { Container, TaskListWrapper } from "./styles";
import { Task } from "../Task";
import AddTask from "../AddTask"

export default function TaskList() {
  const { data } = useAxios("task");

  return (
    <Container>
      <TaskListWrapper>
        {data?.map((task) => (
          <Task
            key={task.id ? task.id : Math.random()}
            id={task.id}
            name={task.name}
            status={task.status}
          />
        ))}
        <AddTask />
      </TaskListWrapper>
    </Container>
  )
}
