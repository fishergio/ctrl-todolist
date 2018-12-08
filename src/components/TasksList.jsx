import React from 'react';
import Task from './Task';

const TasksList = (props) => (
  <ul className="taskList">
    {
      props.tasks.map( (item, i) => (
        < Task index={i+1} task={item.task} id={item.id} key={item.id} delete={ props.deleteTask } />
      ))
    }
  </ul>
)

export default TasksList;