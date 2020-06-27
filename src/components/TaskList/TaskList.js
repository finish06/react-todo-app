import React from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Container from '@material-ui/core/Container';
import List from '@material-ui/core/List';
import Task from './Task/Task'
import './TaskList.css'


const taskList = (props) => {
    return (
        <Container fixed>
            <List>
                {props.taskItems.map((task, index) => {
                    return <Task styling={task.status} key={index} value={task.task} onComplete={() => props.onComplete(index)} onDelete={() => props.onDelete(index)}></Task>
                })}
            </List>
        </Container>
    )
}

export default taskList;