import React, { Component } from 'react';

export default class Flight_from extends Component {
    constructor(props) {
        super(props);
        this.state = {
            flight_from : [
                {city: 'Kyiv', id: 1},
                {city: 'Lviv', id: 2},
                {city: 'Odessa', id: 3}
            ]
        };
      }
    render() {
        return (
            <select>
                {this.state.flight_from.map((city, index)=>{
                    return(<option key={city.id}>{city.city}</option>)
                })}
            </select>
        );
    }
}