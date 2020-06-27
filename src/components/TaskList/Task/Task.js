import React from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import './Task.css'


const task = (props) => {
    return (
        <ListItem>
            <ListItemText className={props.styling} onClick={props.onComplete}>{props.value}</ListItemText>
            <ButtonGroup>
                <Button variant="outlined" color="secondary" onClick={props.onDelete}>Delete</Button>
            </ButtonGroup>
        </ListItem>
    )
}

export default task;