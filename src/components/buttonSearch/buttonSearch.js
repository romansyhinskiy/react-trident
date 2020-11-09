import React from 'react';
import classes from './button.module.css'

const ButtonSearch = props => {
    return (
        <button onClick={props.startSearch} className={classes.buttonSearch}>Search</button>
    );
};

export default ButtonSearch;