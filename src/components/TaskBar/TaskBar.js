import React from 'react';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import { spacing } from '@material-ui/system';



const appBar = (props) => {
    return (
        <Box mb={4}>
            <AppBar position='static'>
                <Typography variant="h2">{props.username}To Do</Typography> 
            </AppBar>
        </Box>
    )
}

export default React.memo(appBar);