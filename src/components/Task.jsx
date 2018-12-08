import React from 'react';

const Task = (props) => (
  <div className="taskItem">
    <li>
      <h3>
        {props.index} .
        <span>
          <i className="fas fa-trash-alt" onClick={ (e) => props.delete(props.id )}></i>
        </span>
        
      {props.task} </h3>
      {/*<span>Status 0/1</span>*/}
    </li>
  </div>
)

export default Task;
