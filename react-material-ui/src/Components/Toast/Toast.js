import React from 'react';
import { Alert } from '@material-ui/lab';
import { Snackbar } from '@material-ui/core';


export default ({open, handleClose, children, severity}) => {
    return(
        <Snackbar 
            open={open} 
            onClose={handleClose}
            autoHideDuration={2000} >

            <Alert 
                onClose={handleClose}
                variant='filled'
                severity={severity}
            >
                { children } 
            </Alert>
        </Snackbar>
    );
}