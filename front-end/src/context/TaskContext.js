import React, { createContext, useState } from "react";
import PropTypes from 'prop-types';
import FormModal from '../components/FormModal'
import taskAPI from "../services/taskAPI";

export const TaskContext = createContext();

export function TaskContextProvider({ children }) {
  const [openFormModal, setOpenFormModal] = useState(false);
  const [name, setName] = useState("");
  const [status, setStatus] = useState("Pendente");

  function handleAddTask() {
    setOpenFormModal(true);
  }

  function handleCloseModal() {
    setOpenFormModal(false);
  }

  function handleChangeName(event) {
    setName(event.target.value);
  }

  function handleChangeStatus(event) {
    setStatus(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();

    const task = {
      name, status
    };
    taskAPI.post("task", task);

    setName("");
    setStatus("Pendente");
    setOpenFormModal(false);
  }

  return (
    <TaskContext.Provider value={{
      handleAddTask,
      handleCloseModal,
      name, setName,
      status, setStatus,
      handleChangeName,
      handleChangeStatus,
      handleSubmit
    }}>
      {children}
      {openFormModal && <FormModal />}
    </TaskContext.Provider>
  )
}

TaskContextProvider.propTypes = {
  children: PropTypes.any,
}.isRequired;
