import React, { useContext } from "react";
import { TaskContext } from "../../context/TaskContext";
import { AddTaskButton, AddIcon } from "./styles"

export default function AddTask() {
  const { handleAddTask } = useContext(TaskContext);

  return (
    <li>
      <AddTaskButton onClick={ handleAddTask }>
        <AddIcon />
      </AddTaskButton>
    </li>
  )
}
