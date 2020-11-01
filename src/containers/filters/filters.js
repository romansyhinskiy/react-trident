import React, { Component, useState } from 'react';
import FlightFrom from '../../components/flight-from/flight-from';
import Country from '../../components/country/country';
import FlightDates from '../../components/flight-dates/flightDates'
import Nights from '../../components/nights/nights'
import ButtonSearch from '../../components/buttonSearch/buttonSearch'

export default class Filters extends Component {
    constructor(props){
        super(props);
        this.state = ({
          urlParams: {
            night: null,
          }
        })
      }

    getNights = (value) => {
        this.setState({night: value})
    }

    render() {
        return (
            <>
                <FlightFrom />
                <div className="d-flex mt-4">
                    <Country />
                    <FlightDates />
                    <Nights parentCallback={this.getNights}/>
                    <ButtonSearch />
                </div>
            </>
        );
    }
}