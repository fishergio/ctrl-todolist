import React from 'react';
import uid from 'uid';

const TaskForm = (props) => (
  <div className="taskFormContent">
    <h2 className="formTitle">Ctrl+ToDo</h2>
    <form onSubmit={props.addTask} className="taskForm">
      <input className="formControl" type="text" name="task" placeholder="Enter Task" />
      <input type="hidden" name="id" value={uid(5)} />
      <input className="btnFormSubmit" type="submit" value="Add Task" />
    </form>
    {
      (props.tasks.length > 0) &&
        <button className="btnForm" onClick={props.deleteAll}>Delete All</button>
    }
  </div>
)

export default TaskForm;