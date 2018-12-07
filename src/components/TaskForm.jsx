import React from 'react';

const TaskForm = (props) => (
  <div>
    <h2>Ctrl+ToDo</h2>
    <hr/>
    <form>
      <input type="text" name="task" placeholder="Add task" />
      <input type="submit" value="Add Task" />
    </form>
  </div>
)

export default TaskForm;