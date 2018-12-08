import React from 'react';

const Task = (props) => (
  <div className="taskItem">
    <li>
      <h3>
      <a><i class="fas fa-trash-alt"></i></a>
      {props.task} </h3>
      {/*<span>Status 0/1</span>*/}
    </li>
  </div>
)

export default Task;
