import React, {Component} from 'react';
import {connect} from 'react-redux'
import axios from 'axios'

import FlightFrom from '../../components/flight-from/flight-from';
import Country from '../../components/country/country';
import FlightDates from '../../components/flight-dates/flightDates'
import Nights from '../../components/nights/nights'
import ButtonSearch from '../../components/buttonSearch/buttonSearch'
import HotelsResult from "../../components/hotelsResult/hotelsResult";
import classes from './filters.module.css'

class Filters extends Component {

    constructor(props) {
        super(props);
        this.state = ({
            resultHotels: []
        })
    }

    // fetchHotels = async  () => {
    //     const ACCESS_TOKEN = '2c187-62875-55d85-b6d67-b60b3';
    //     const country = this.props.countryTo;
    //     const city = this.props.city;
    
    //     const fetchCities = await fetch(
    //         `https://export.otpusk.com/api/tours/search?from=${city}&to=${country}&access_token=${ACCESS_TOKEN}`
    //     )
    //     const fetchCitiesData = await fetchCities.json()
    //     this.setState({
    //         resultHotels: fetchCitiesData.hotels
    //     })
    //     console.log(this.state.resultHotels)
    
    
    // }

    // fetchHotels = async (page = 1, N = 10) => {
    //     const ACCESS_TOKEN = '2c187-62875-55d85-b6d67-b60b3';
    //     const country = this.props.countryTo;
    //     const city = this.props.city;
    //     let n = 0;
    //     let isSuccess = true;
    //     let isLastResult = false;
    //     if (isSuccess && isLastResult && n < N) {
    //         const fetchCities = await fetch(
    //             `https://export.otpusk.com/api/tours/search?access_token=${ACCESS_TOKEN}&from=${city}&to=${country}&number=${n}`
    //         )
    //             .then((response) => {
    //                 if (response.ok) {
    //                     return response.json()
    //                 } else {
    //                     throw new Error('Something went wrong');
    //                 }
    //             })
    //             .then((data) =>{
    //                 console.log(data)
    //                 n++;
    //                 isSuccess = true;
    //                 isLastResult = data.lastResult
    //             })
    //             .catch((error) => {
    //                 isSuccess = false;
    //             });
    //     } else{

    //     }


    //     // this.setState({
    //     //     resultHotels: fetchCitiesData.hotels
    //     // })
    //     // console.log(this.state.resultHotels)
    // }

    startSeearch = () => {
        let lastResult = false;
        let isSuccess = true;
        let n = 0;
        let N = 10;
        const country = this.props.countryTo;
        const city = this.props.city;
             function fetchHotels () {
                const ACCESS_TOKEN = '2c187-62875-55d85-b6d67-b60b3';
              

                if(!lastResult && isSuccess && n < N){
                    axios.get(
                        `https://export.otpusk.com/api/tours/search?access_token=${ACCESS_TOKEN}&from=${city}&to=${country}&number=${n}`
                    )
                    .then(response => {
                        console.log(response.data)
                        n++
                        lastResult = response.data.lastResult
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

    
    render() {
        console.log(this.props)
        return (
            <div>
                <div className={classes.filtersContainer}>
                    <FlightFrom/>
                    <div className={classes.filters}>
                        <Country/>
                        <FlightDates/>
                        <Nights/>
                        <ButtonSearch startSeearch={this.startSeearch}/>
                    </div>
                </div>
                <HotelsResult/>
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