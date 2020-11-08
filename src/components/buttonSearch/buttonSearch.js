import React from 'react';
import classes from './button.module.css'

const ButtonSearch = props => {
    return (
        <button onClick={props.startSeearch} className={classes.buttonSearch}>Search</button>
    );
};

export default ButtonSearch;