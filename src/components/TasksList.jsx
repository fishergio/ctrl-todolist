import React from 'react';
import Task from './Task';

const TasksList = (props) => (
  <ul>
    {
      props.tasks.map( (item) => (
        < Task task={item.task} id={item.id} key={item.id} delete={ props.deleteTask } />
      ))
    }
  </ul>
)

export default TasksList;