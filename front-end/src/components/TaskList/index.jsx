import React, { useCallback, useContext, useEffect } from "react";
import { TaskContext } from "../../context/TaskContext";

import { Container, TaskListWrapper } from "./styles";
import { Task } from "../Task";
import AddTask from "../AddTask"
import { deleteTask, getTasks } from "../../services/api";

export default function TaskList() {
  const {
    taskList,
    IsLoading,
    setIsLoading,
    setTaskList,
    titleFilter,
    statusFilter
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

  useEffect(() => {
    loadData();
  }, [loadData])

  const handleDeleteTask = async (id) => {
    await deleteTask(id);
    await loadData();
  }

  return (
    <Container>
      {IsLoading ? <p>Carregando...</p> :
        <TaskListWrapper>
          {
            taskList?.filter((task) =>
              task.title.toLowerCase().includes(titleFilter.toLowerCase()) &&
              task.status.toLowerCase().includes(statusFilter)
            ).map((task) => (
              <Task
                key={task.id}
                id={task.id}
                title={task.title}
                description={task.description}
                status={task.status}
                handleDeleteTask={handleDeleteTask}
              />
            ))
          }
          <AddTask />
        </TaskListWrapper>
      }
    </Container>
  )
}
