import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import TaskInput from './components/TaskInput/TaskInput';
import TaskList from './components/TaskList/TaskList';
import TaskBar from './components/TaskBar/TaskBar';
import axios from './axios-orders';

import Container from '@material-ui/core/Container';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
    taskItems: [],
    tempTask: 'First Task',
    }
  };

  getListHandler = () => {
    axios.get('/todo.json')
      .then(response => {
        if (response.data) {
          let items = []
          for (const key in response.data) {
            items.push({'key': key, 'task': response.data[key]['task'], 'status': response.data[key]['status']})}
          this.setState({
            taskItems: items
          })
        }
      })
      .catch(error => {
        console.log(error)
        this.setState({
          taskItems: []
        })
      })
  }

  componentDidMount() {
    this.getListHandler()
  }

  holdTempTaskHandler = (event) => {
    this.setState({tempTask: event.target.value})
  }

  addToListHandler = (event) => {
    const taskItems = [...this.state.taskItems];
    const item = {'task': this.state.tempTask, 'status':'incomplete'}
    axios.post('/todo.json', item)
      .then(response => console.log('Task saved to DB'))
      .catch(error => console.log(error))
    this.setState({tempTask: 'Subsequent Task'})
    event.target.reset();
    event.preventDefault()
    setTimeout(this.getListHandler, 300)
  }

  deleteTaskHandler = (taskIndex) => {
    const taskItems = [...this.state.taskItems];
    const itemToRemove = taskIndex;
    console.log(taskItems[taskIndex])
    // console.log('/todo/' + taskItems[taskIndex]['key'] + '.json')
    axios.delete('/todo/' + taskItems[taskIndex]['key'] + '.json', {params: {task: taskItems[taskIndex]['task'], status: taskItems[taskIndex['status']]} } )
      .then(response => console.log(response))
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
    console.log('/todo/' + taskItems[taskIndex]['key'] + '/status.json')
    console.log(taskItems[taskIndex]['status'])
    axios.put('/todo/' + taskItems[taskIndex]['key'] + '.json', {'status': taskItems[taskIndex]['status'], 'task': taskItems[taskIndex]['task']})
      .then(response => console.log(response))
    setTimeout(this.getListHandler, 300)
  }
    

  render() {
    return (
      <Container maxWidth="false" className="App">
        <TaskBar username={''}/>
        <TaskInput defaultDisplay={this.state.tempTask} defaultValue={this.state.defaultValue} typeTask={this.holdTempTaskHandler} submitTask={this.addToListHandler} />
        <TaskList taskItems={this.state.taskItems} onComplete={this.commpleteTaskHandler} onDelete={this.deleteTaskHandler}/>
      </Container>
    );
  }
}

export default App;
