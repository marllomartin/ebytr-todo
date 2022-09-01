import React, { useContext } from "react";
import { TaskContext } from "../../context/TaskContext";
import { useAxios } from "../../hooks/useAxios";

import { Container, TaskListWrapper } from "./styles";
import { Task } from "../Task";
import AddTask from "../AddTask"

export default function TaskList() {
  const { titleFilter, statusFilter } = useContext(TaskContext);

  const { data } = useAxios("task");

  return (
    <Container>
      <TaskListWrapper>
        {
          data?.filter((task) =>
            task.title.toLowerCase().includes(titleFilter.toLowerCase()) &&
            task.status.toLowerCase().includes(statusFilter)
          ).map((task) => (
            <Task
              key={task.id ? task.id : Math.random()}
              id={task.id}
              title={task.title}
              description={task.description}
              status={task.status}
            />
          ))
        }
        <AddTask />
      </TaskListWrapper>
    </Container>
  )
}
