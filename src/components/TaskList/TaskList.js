import React from "react";
import "./TaskList.css";
import PropTypes from "prop-types";
import TaskItem from "../TaskItem/TaskItem";
import svgIcon from "../../img/svg-2.svg";

export default function TaskList({
  title,
  taskState,
  onAddTask,
  task,
  onTaskUpdate,
  onTaskDelete
}) {
  const addTask = () => {
    onAddTask("Nova tarefa", taskState);
  };

  return (
    <div className="task-list">
      <div className="title">{title}</div>
      <div className="content">
        {task.map((task) => {
          return (
            <TaskItem
              key={task.id}
              id={task.id}
              title={task.title}
              taskState={task.state}
              onTaskUpdate={onTaskUpdate}
              onTaskDelete={onTaskDelete}
            />
          );
        })}
        {task.length === 0 && <div className="empty-list">Lista vazia</div>}
        <button className="addTaskButton" onClick={addTask}>
          <img className="logo-button" alt="logo-svg" src={svgIcon} />
          Nova tarefa
          <img className="logo-button" alt="logo-svg" src={svgIcon} />
        </button>
      </div>
    </div>
  );
}

TaskList.propTypes = {
  title: PropTypes.string.isRequired,
  onAddTask: PropTypes.func.isRequired,
  task: PropTypes.array.isRequired
};
