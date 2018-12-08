import React from 'react';

const Task = (props) => (
  <div className="taskItem">
    <li>
      <span>{props.index}</span>{'.'}
      <i className="fas fa-trash-alt" onClick={ (e) => props.delete(props.id )}></i>
      <h3>{props.task}</h3>
    </li>
  </div>
)

export default Task;
