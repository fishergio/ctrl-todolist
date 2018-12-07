import React, { Component } from 'react';
import TaskForm from './TaskForm';
import TasksList from './TasksList';
import '../index.css';

class App extends Component {

  constructor(){
    super();

    this.state = {
      tasks: []
    }

    this.addTaskHandle = this.addTaskHandle.bind(this);
  }

  addTaskHandle(e){
  
    e.preventDefault();

    const tasks = this.state.tasks; // Asignar el contendio del estado a un nuevo array
    
    let form = e.target, // Agregar valores de loa inputs a un objeto
    taskData = {
      id: form.id.value,
      task: form.task.value
    }

    tasks.push(taskData); // Agregando datos al nuevo array

    console.log(taskData);

    this.setState({ tasks: tasks}) // Actualizando el estado

    form.reset(); // Limpiar input del formulario
  }

  render(){
    const { tasks } = this.state;

    return(
      <div>
        < TaskForm addTask={ this.addTaskHandle }/>
        <hr/>
        <TasksList tasks={tasks}/>
      </div>
    )
  }
}

export default App;