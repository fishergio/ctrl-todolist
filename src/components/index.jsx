import React, { Component } from 'react';
import TaskForm from './TaskForm';

class App extends Component {

  constructor(){
    super();

    this.state = {
      tasks: []
    }
  }

  render(){

    return(
      <div>
        < TaskForm/>
      </div>
    )
  }
}

export default App;