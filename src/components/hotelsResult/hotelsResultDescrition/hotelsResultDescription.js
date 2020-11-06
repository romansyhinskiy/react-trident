import React from 'react'
import classes from './hotelsResultDescription.module.css'

const HotelsResultDescription = () => {
    return (
        <div className={classes.hotelsResultDescription}>
            <div>
                <p className={classes.hotelName}>Sharm Inn Amarein 4*</p>
                <p className={classes.hotelCountry}>Єгипет, Шарм-ель-Шейх | Рейтинг: 4/10</p>
            </div>
            <div className={classes.hotelsDetailsCols}>
                <div>
                    <p className={classes.hotelDetailsValue}><span className={classes.hotelDetails}>Дата вильоту:</span> 05.11.2020</p>
                    <p className={classes.hotelDetailsValue}><span className={classes.hotelDetails}>Тривалість туру:</span> 8 ночей</p>
                    <p className={classes.hotelDetailsValue}><span className={classes.hotelDetails}>Номер:</span> Standard Room / dbl</p>
                </div>
                <div>
                    <p className={classes.hotelDetailsValue}><span className={classes.hotelDetails}>Туристи:</span> 2 дорослих</p>
                    <p className={classes.hotelDetailsValue}><span className={classes.hotelDetails}>Харчування:</span> AI все включено</p>
                </div>
            </div>
        </div>
    )
};

export default HotelsResultDescription