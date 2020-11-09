import React, {Component} from 'react';
import {connect} from 'react-redux'
import axios from 'axios'

import FlightFrom from '../../components/flight-from/flight-from';
import Country from '../../components/country/country';
import FlightDates from '../../components/flight-dates/flightDates'
import Nights from '../../components/nights/nights'
import ButtonSearch from '../../components/buttonSearch/buttonSearch'
// import HotelsResult from "../../components/hotelsResult/hotelsResult";
import classes from './filters.module.css'

class Filters extends Component {

    constructor(props) {
        super(props);
        this.state = ({
            resultHotels: [],
            isLoading: false
        })
    }

    startSearch = () => {
        let lastResult = false;
        let isSuccess = true;
        let n = 0;
        let N = 10;
        const country = this.props.countryTo;
        const city = this.props.city;
             const fetchHotels = () => {
                const ACCESS_TOKEN = '2c187-62875-55d85-b6d67-b60b3';

                if(!lastResult && isSuccess && n < N){
                    axios.get(`https://export.otpusk.com/api/tours/search?access_token=${ACCESS_TOKEN}&from=${city}&to=${country}&number=${n}`)
                    .then(response => {
                        // console.log(response.data)
                        n++;
                        lastResult = response.data.lastResult;
                        this.setState({
                            resultHotels : response.data.hotels,
                            isLoading: true
                        })
                        console.log(this.state.resultHotels)
                    })
                    .catch( error => {
                        isSuccess = false
                    })
                } else {
                    clearInterval(requestTimerId);
                }
            }

        let requestTimerId = setInterval(fetchHotels, 5000);
        fetchHotels();
    }

    renderHotelCard = () => {
        let storedHotels = this.state.resultHotels;
        for( let hotelItems in storedHotels){
          console.log(storedHotels[hotelItems])
        }
    }

    
    render() {
        console.log(this.props)

        return (
            <div>
                <div className={classes.filtersContainer}>
                    <FlightFrom />
                    <div className={classes.filters}>
                        <Country />
                        <FlightDates />
                        <Nights />
                        <ButtonSearch startSearch={this.startSearch}/>
                        <button type='button' onClick={this.renderHotelCard}>try</button>
                    </div>
                </div>
                {this.state.isLoading ? <p>hotel</p> : <p>hotel not rendered</p>}
                {/*<HotelsResult/>*/}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        countryTo: state.countryToReducer.countryTo,
        city: state.cityReducer.flightFromCity
    }
}

export default connect(mapStateToProps)(Filters)