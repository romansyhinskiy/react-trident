import React, { Component } from 'react';
import Filters from './containers/filters/filters'


export default class App extends Component {
  constructor(props){
    super(props);
    this.state = ({
      urlParams: {
        country: null,
        flightFromCity: null,
        flightFrom: null,
        flightTo: null,
        nightsFrom: null,
        nigthsTo: null
      }
    })
  }
  render() {
    return (
      <div className="">
        <Filters />
      </div>
    );
  }
}
