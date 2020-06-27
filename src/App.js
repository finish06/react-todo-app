import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import TaskInput from './components/TaskInput/TaskInput';
import TaskList from './components/TaskList/TaskList';
import TaskBar from './components/TaskBar/TaskBar';

import Container from '@material-ui/core/Container';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
    taskItems: [],
    tempTask: 'First Task',
    }
  };

  holdTempTaskHandler = (event) => {
    this.setState({tempTask: event.target.value})
  }

  addToListHandler = (event) => {
    const taskItems = [...this.state.taskItems];
    taskItems.push({'task': this.state.tempTask, 'status':'incomplete'})
    this.setState({tempTask: 'Subsequent Task'})
    event.target.reset();
    this.setState({
      taskItems: taskItems
    })
    event.preventDefault()
  }
  
  deleteTaskHandler = (taskIndex) => {
    const taskItems = [...this.state.taskItems];
    const itemToRemove = taskIndex;
    taskItems.splice(taskIndex, 1);
    this.setState({
      taskItems: taskItems
    })
  }

  commpleteTaskHandler = (taskIndex) => {
    const taskItems = [...this.state.taskItems];
    const itemToComplete = taskIndex;
    if (taskItems[taskIndex].status == 'completed') {
      taskItems[taskIndex].status = 'incomplete'
    }
    else {
      taskItems[taskIndex].status = 'completed'
    }
    this.setState({
      taskItems: taskItems
    })
  }

  render() {

    return (
      <Container fluid maxWidth='false' className="App">
        <TaskBar username={''}/>
        <TaskInput defaultDisplay={this.state.tempTask} defaultValue={this.state.defaultValue} typeTask={this.holdTempTaskHandler} submitTask={this.addToListHandler} />
        <TaskList taskItems={this.state.taskItems} onComplete={this.commpleteTaskHandler} onDelete={this.deleteTaskHandler}/>
      </Container>
    );
  }
}

export default App;
