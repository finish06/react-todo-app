import React from 'react';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';



const taskInput = (props) => {
    return (
        <Container fixed>
            <form onSubmit={props.submitTask}>
                        <TextField fullWidth placeholder={props.defaultDisplay} type='text' name='taskinput' onChange={props.typeTask}></TextField>
                <Button type="submit">Submit</Button>
            </form>
        </Container>

    )
};

export default taskInput;