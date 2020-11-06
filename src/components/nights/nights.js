import React from 'react';
import classes from './nights.module.css'

const Nights = (props) => {
    return (
        <div>
            <input className={classes.nightsInput} placeholder='nights from'/>
            <input className={classes.nightsInput} placeholder='nights to'/>
        </div>
    );
};

export default Nights;