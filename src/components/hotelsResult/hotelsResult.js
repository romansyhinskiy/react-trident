import React from 'react'
import classes from './hotelsResult.module.css'
import HotelsResultImg from './hotelsResultImg/hotelsResultImg'
import HotelsResultDescription from './hotelsResultDescrition/hotelsResultDescription'
import HotelsResultPrice from './hotelsResultPrice/hotelsResultPrice'

const HotelsResult = props => {
    return (
        <div className={classes.hotelsResult}>
            <HotelsResultImg />
            <HotelsResultDescription />
            <HotelsResultPrice />
        </div>
    )
};

export default HotelsResult