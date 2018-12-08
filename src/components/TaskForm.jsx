import React from 'react';
import uid from 'uid';

const TaskForm = (props) => (
  <div>
    <h2>Ctrl+ToDo</h2>
    <hr/>
    <button onClick={props.deleteAll}>Delete All</button>
    <form onSubmit={props.addTask}>
      <input type="text" name="task" placeholder="Add task" />
      <input type="hidden" name="id" value={uid(5)} />
      <input type="submit" value="Add Task" />
    </form>
  </div>
)

export default TaskForm;