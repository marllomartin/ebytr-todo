import React, { createContext, useState } from "react";
import PropTypes from 'prop-types';
import FormModal from '../components/FormModal';
import { useAxios } from '../hooks/useAxios';
import taskAPI from "../services/taskAPI";

export const TaskContext = createContext();

export function TaskContextProvider({ children }) {
  const { data, mutate } = useAxios("task");

  const [openFormModal, setOpenFormModal] = useState(false);
  const [name, setName] = useState("");
  const [status, setStatus] = useState("Pendente");
  const [id, setId] = useState(false);

  function handleEdit(taskId, taskName, taskStatus) {
    setName(taskName);
    setStatus(taskStatus);
    setId(taskId);
    setOpenFormModal(true);
  }

  function handleAddTask() {
    setOpenFormModal(true);
  }

  function handleCloseModal() {
    if (name) {
      setName('');
    }
    if (status) {
      setStatus('Pendente');
    }
    setOpenFormModal(false);
  }

  function handleChangeName(event) {
    setName(event.target.value);
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

    const task = {
      id, name, status
    };

    if (id) {
      taskAPI.put(`task/${id}`, {
        name, status
      })

      const updatedTasks = data?.map((task) => {
        if (task.id === id) {
          return {
            ...task, name, status
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

    setName("");
    setStatus("Pendente");
    setOpenFormModal(false);
  }

  return (
    <TaskContext.Provider value={{
      handleAddTask,
      handleCloseModal,
      handleChangeName,
      handleChangeStatus,
      handleSubmit,
      handleEdit,
      handleDelete,
      name, setName,
      status, setStatus,
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
