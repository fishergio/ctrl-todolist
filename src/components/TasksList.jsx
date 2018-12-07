import React from 'react';
import Task from './Task';

const TasksList = (props) => (
  <ul>
    {
      props.tasks.map( (item) => (
        < Task task={item.task} key={item.id}/>
      ))
    }
  </ul>
)

export default TasksList;