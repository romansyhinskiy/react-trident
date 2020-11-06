// import React, {useState, useEffect} from 'react'
// import classes from './flight-from.module.css'
//
// const Flight_from = () => {
//     const ACCESS_TOKEN = '2c187-62875-55d85-b6d67-b60b3';
//
//     useEffect( ()=>{
//         fetchFlightFromCities()
//     }, []);
//     const [flightFromCity, setFlightFromCity] = useState([])
//
//     const fetchFlightFromCities = async () => {
//         const response =  await fetch(`https://export.otpusk.com/api/tours/fromCities?geoId=55&lang=ukr&access_token=${ACCESS_TOKEN}`)
//         const citiesResponse = await response.json()
//         setFlightFromCity(citiesResponse.fromCities)
//     }
//
//     return (
//
//              <select className={classes.flightFromSelect}>
//                  {flightFromCity.map(city => {
//                       return (
//                           <option id={city.id} key={city.id}>{city.name}</option>
//                       )
//                  })}
//              </select>
//          );
// };
//
// export default Flight_from

import React, {Component} from 'react'
import classes from './flight-from.module.css'
import {connect} from 'react-redux'


class Flight_from extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            flightFromCity: []
        })
    }

    componentDidMount() {
        this.fetchFlightFromCities()
    }

    fetchFlightFromCities = async () => {
        const ACCESS_TOKEN = '2c187-62875-55d85-b6d67-b60b3';

        const fetchCities = await fetch(`https://export.otpusk.com/api/tours/fromCities?geoId=55&lang=ukr&access_token=${ACCESS_TOKEN}`)
        const CitiesData = await fetchCities.json()
        this.setState({
            flightFromCity: CitiesData.fromCities
        })

    }

    render() {
        return (
            <div>
                <select
                    className={classes.flightFromSelect}
                    onChange={this.props.selectedCity}
                >
                   {this.state.flightFromCity.map(city => {
                       return (
                           <option id={city.id} key={city.id}>{city.name}</option>
                       )
                  })}
              </select>
            </div>
        )
    }
}
function mapDispatchToProps(dispatch){
    return{
        selectedCity: e => {
            const action = {type: 'SELECTED_FLIGHT_FROM_CITY', selectedFlightFromCity: e.target.selectedOptions[0].id}
            dispatch(action)
        }
    }
}
export default connect(null, mapDispatchToProps)(Flight_from)