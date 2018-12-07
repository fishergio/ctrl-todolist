import React from 'react';

const TaskForm = (props) => (
  <div>
    <h2>Ctrl+ToDo</h2>
    <hr/>
    <form onSubmit={props.addTask}>
      <input type="text" name="task" placeholder="Add task" />
      <input type="hidden" name="id" value={ Math.floor(Math.random() * 100 ) } />
      <input type="submit" value="Add Task" />
    </form>
  </div>
)

export default TaskForm;