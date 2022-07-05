import React, { useEffect, useState } from "react";
import { Container, TaskListWrapper } from "./styles";

import { Task } from "../Task";
import AddTask from "../AddTask"

import taskAPI from '../../services/taskAPI'


export default function TaskList() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    taskAPI.get("task").then(({ data }) => {
      setTasks(data);
    })
    console.log(tasks);
  }, [])

  return (
    <Container>
      <TaskListWrapper>
        {tasks?.map((task) => (
          <Task
            key={task.id}
            name={task.name}
            status={task.status}
          />
        ))}
        <AddTask />
      </TaskListWrapper>
    </Container>
  )
}
