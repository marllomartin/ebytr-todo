import React, { createContext, useState } from "react";
import PropTypes from "prop-types";
import FormModal from "../components/FormModal";

export const TaskContext = createContext();

export function TaskContextProvider({ children }) {
  const [ taskList, setTaskList ] = useState([]);
  const [ isLoading, setIsLoading] = useState(true);

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

  return (
    <TaskContext.Provider value={{
      taskList, setTaskList,
      isLoading, setIsLoading,
      setOpenFormModal,
      handleAddTask,
      handleCloseModal,
      handleChangeTitle,
      handleChangeDescription,
      handleChangeStatus,
      handleEdit,
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
