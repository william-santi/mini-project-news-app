import React from 'react';


const classes = {
    spinner:   'spinner',
    container: 'container-spinner',
}

export const Spinner = () => {
    return (
        <div className={classes.container}>
            <div className={classes.spinner}></div>
        </div>
    )
}