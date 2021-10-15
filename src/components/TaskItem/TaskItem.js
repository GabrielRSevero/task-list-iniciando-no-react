import React, { useState } from "react";
import PropTypes from "prop-types";
import "./TaskItem.css";

export default function TaskItem({
  id,
  title,
  taskState,
  onTaskUpdate,
  onTaskDelete
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [editableTitle, setEditableTitle] = useState(title);
  const onTitleChange = (event) => {
    const newTitle = event.target.value;
    setEditableTitle(newTitle);
    onTaskUpdate(id, newTitle, taskState);
  };

  const PressedKey = (event) => {
    if (event.key === "Enter") {
      setIsEditing(false);
      if (editableTitle.length === 0) {
        onTaskDelete(id);
      }
    }
  };

  const onTaskStateChange = (event) => {
    onTaskUpdate(id, title, event.target.value);
  };

  if (isEditing) {
    return (
      <input
        className="input-edit-task"
        type="text"
        value={editableTitle}
        onChange={onTitleChange}
        onKeyPress={PressedKey}
      />
    );
  } else {
    return (
      <div className="task-container">
        <div className="task" onClick={(e) => setIsEditing(true)}>
          {editableTitle}
        </div>
        <select
          className="state-select"
          onChange={onTaskStateChange}
          value={taskState}
        >
          <option value="Pendente">Pendente</option>
          <option value="Fazendo">Fazendo</option>
          <option value="Finalizado">Finalizado</option>
        </select>
      </div>
    );
  }
}

TaskItem.prototype = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  taskState: PropTypes.string.isRequired
};
