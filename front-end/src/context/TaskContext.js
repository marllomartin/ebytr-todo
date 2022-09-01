import React, { createContext, useState } from "react";
import PropTypes from "prop-types";
import FormModal from "../components/FormModal";
import { useAxios } from "../hooks/useAxios";
import taskAPI from "../services/taskAPI";

export const TaskContext = createContext();

export function TaskContextProvider({ children }) {
  const { data, mutate } = useAxios("task");

  const [openFormModal, setOpenFormModal] = useState(false);

  const [title, setTitle] = useState("");
  const [titleFilter, setTitleFilter] = useState("");

  const [description, setDescription] = useState("");

  const [status, setStatus] = useState("Pendente");
  const [statusFilter, setStatusFilter] = useState("");

  const [id, setId] = useState(false);

  function handleEdit(taskId, taskTitle, taskDescription, taskStatus) {
    setTitle(taskTitle);
    setDescription(taskDescription);
    setStatus(taskStatus);
    setId(taskId);
    setOpenFormModal(true);
  }

  function handleAddTask() {
    setTitleFilter("");
    setStatusFilter("");
    setOpenFormModal(true);
  }

  function handleCloseModal() {
    if (title) {
      setTitle("");
    }
    if (description) {
      setDescription("");
    }
    if (status) {
      setStatus("Pendente");
    }
    setOpenFormModal(false);
  }

  function handleChangeTitle(event) {
    setTitle(event.target.value);
  }

  function handleChangeDescription(event) {
    setDescription(event.target.value);
  }

  function handleChangeStatus(event) {
    setStatus(event.target.value);
  }

  function handleDelete(id) {
    taskAPI.delete(`task/${id}`);

    const updatedTasks = data?.filter((task) => task.id !== id);

    mutate(updatedTasks, false);
  }

  function handleSubmit(event) {
    event.preventDefault();

    const task = { id, title, description, status };

    if (id) {
      taskAPI.put(`task/${id}`, { title, description, status })

      const updatedTasks = data?.map((task) => {
        if (task.id === id) {
          return {
            ...task, title, description, status
          };
        }
        return task;
      });

      mutate(updatedTasks, false);
    } else {
      taskAPI.post("task", task);

      const updatedTasks = [...data, task];

      mutate(updatedTasks, false);
    }

    setTitle("");
    setDescription("");
    setStatus("Pendente");
    setOpenFormModal(false);
  }

  return (
    <TaskContext.Provider value={{
      handleAddTask,
      handleCloseModal,
      handleChangeTitle,
      handleChangeDescription,
      handleChangeStatus,
      handleSubmit,
      handleEdit,
      handleDelete,
      title, setTitle,
      titleFilter, setTitleFilter,
      description, setDescription,
      status, setStatus,
      statusFilter, setStatusFilter,
      id, setId
    }}>
      {children}
      {openFormModal && <FormModal />}
    </TaskContext.Provider>
  )
}

TaskContextProvider.propTypes = {
  children: PropTypes.any,
}.isRequired;
