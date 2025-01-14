import React from 'react';

export const Task = (props) => {
  return (
    <div className="task">
      <h1 style={{ color: props.isCompleted ? 'red' : 'black' }}>
        {props.taskName}
      </h1>
      <button onClick={() => props.completeTask(props.id)}>Complete</button>
      <button onClick={() => props.deleteTask(props.id)}>Delete</button>
    </div>
  );
};