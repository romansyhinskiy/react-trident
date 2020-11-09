import React from 'react'
import classes from './hotelsResult.module.css'
import HotelsResultImg from './hotelsResultImg/hotelsResultImg'
import HotelsResultDescription from './hotelsResultDescrition/hotelsResultDescription'
import HotelsResultPrice from './hotelsResultPrice/hotelsResultPrice'

const HotelsResult = props => {
    return (

        <div className={classes.hotelsResult}>
            <HotelsResultImg />
            <HotelsResultDescription
                hotelName={props.hotelName}
                hotelCountry={props.hotelCountry}
                hotelsCity={props.hotelsCity}
                hotelStars={props.hotelStars}
            />
            <HotelsResultPrice />
        </div>
    )
};

export default HotelsResult