import React, { useState } from "react";
import "./styles.css";
import Navbar from "./components/navbar/navbar.js";
import TaskList from "./components/TaskList/TaskList.js";

const tasks = {
  id: "0",
  title: "Nova tarefa",
  state: "Pendente"
};

let idAcc = 0;
const generateId = () => {
  idAcc += 1;
  return idAcc;
};

export default function App() {
  const [task, setTask] = useState([]);

  const addTask = (title, state) => {
    const newTask = {
      id: generateId(),
      title,
      state
    };
    setTask((existingTasks) => {
      return [...existingTasks, newTask];
    });
  };

  const UpdateTask = (id, title, state) => {
    setTask((existingTasks) => {
      return existingTasks.map((task) => {
        if (task.id === id) {
          return { ...task, title, state };
        } else {
          return task;
        }
      });
    });
  };

  const DeleteTask = (id) => {
    setTask((existingTasks) => {
      return existingTasks.filter((task) => task.id !== id);
    });
  };

  return (
    <div className="App">
      <Navbar />

      <div className="container">
        <TaskList
          title="Pendente"
          taskState="Pendente"
          onAddTask={addTask}
          task={task.filter((t) => t.state === "Pendente")}
          onTaskDelete={DeleteTask}
          onTaskUpdate={UpdateTask}
        />
        <TaskList
          title="Fazendo"
          taskState="Fazendo"
          onAddTask={addTask}
          task={task.filter((t) => t.state === "Fazendo")}
          onTaskDelete={DeleteTask}
          onTaskUpdate={UpdateTask}
        />
        <TaskList
          title="Finalizado"
          taskState="Finalizado"
          onAddTask={addTask}
          task={task.filter((t) => t.state === "Finalizado")}
          onTaskDelete={DeleteTask}
          onTaskUpdate={UpdateTask}
        />
      </div>
    </div>
  );
}
