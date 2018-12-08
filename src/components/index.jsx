import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TaskForm from './TaskForm';
import TasksList from './TasksList';
import {saveDataLocal, loadDataLocal} from '../services/';
import uid from 'uid';

import '../index.css';

class App extends Component {

  constructor(){
    super();

    this.state = {
      tasks: []
    }

    this.addTaskHandle = this.addTaskHandle.bind(this);
    this.deleteTaskHandle = this.deleteTaskHandle.bind(this);
    this.deleteAllTasks = this.deleteAllTasks.bind(this);
  }

  componentDidMount(){
    let data = loadDataLocal();
    this.setState({ tasks: data })
  }

  addTaskHandle(e){

    const tasks = this.state.tasks; // Asignar el contendio del estado a un nuevo array
    
    let form = e.target, // Agregar valores de loa inputs a un objeto
    taskData = {
      id: form.id.value,
      task: (form.task.value) ? form.task.value : App.defaultProps.task,
      status: false
    }
    
    tasks.push(taskData); // Agregando datos al nuevo array
    
    //console.log(taskData);
    
    this.setState({ tasks: tasks}) // Actualizando el estado
    
    saveDataLocal(this.state.tasks);
    
    e.preventDefault();

    form.reset(); // Limpiar input del formulario
  }

  deleteTaskHandle(id){
    
    let { tasks } = this.state;

    const filterTasks = tasks.filter( (item) => item.id !== id);

    this.setState({ tasks: filterTasks } );

    saveDataLocal(filterTasks);

  }

  deleteAllTasks(){
    this.setState({tasks: [] });
    localStorage.removeItem('tasks');
  }

  render(){
    const { tasks } = this.state;

    return(
      <div className="taskContent">
        <TaskForm tasks={this.state.tasks} addTask={this.addTaskHandle} deleteAll={this.deleteAllTasks} />
        <TasksList tasks={tasks} deleteTask={this.deleteTaskHandle} />
      </div>
    )
  }
}

App.propTypes = {
  id: PropTypes.string,
  task: PropTypes.string.isRequired,
}

App.defaultProps = {
  id: uid(5),
  task: 'Task noName',
}
export default App;