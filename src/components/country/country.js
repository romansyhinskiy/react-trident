import React, {Component} from 'react'
import classes from './country.module.css'
import {connect} from 'react-redux'

class Country extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            country: []
        })
    }

    componentDidMount() {
        this.getCountries()
    }

    getCountries = async () => {
        const ACCESS_TOKEN = '2c187-62875-55d85-b6d67-b60b3';

        const fetchCountries = await fetch(`https://export.otpusk.com/api/tours/countries?with=price&lang=ukr&access_token=${ACCESS_TOKEN}`)
        const countriesData = await fetchCountries.json()
        this.setState({
            country: countriesData.countries
        })
    }

    render() {
        return (
        <div>
            <select
                className={classes.countrySelect}
                onChange={this.props.countrySelected}
            >
               <option id="00">Choose country</option>
                {this.state.country.map(country => {
                    return (
                        <option
                            datatype='country'
                            data-name={country.name}
                            data-currency={country.currency}
                            id={country.id}
                            key={country.id}
                        >
                            {country.name}
                        </option>
                    )
                })}
            </select>
        </div>
    );
    }
}
function mapStateToProps(state) {
    return{
        country: state.countryToReducer.countryTo
    }
}
function mapDispatchToProps(dispatch){
    return{
        countrySelected: (e) => {
            const action = { type: 'SELECTED_COUNTRY', selectedOption: e.target.selectedOptions[0].id};
            dispatch(action)
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Country)






































// import React, {useState, useEffect} from 'react';
// import classes from './country.module.css'
// import {connect} from 'react-redux'
//
// const Country = ({onAddCountry}) => {
//     const ACCESS_TOKEN = '2c187-62875-55d85-b6d67-b60b3';
//
//     useEffect(()=> {
//         getCountries()
//     })
//
//     const [countries, setCountries] = useState([])
//
//     const getCountries = async () => {
//         const fetchCountries = await fetch(`https://export.otpusk.com/api/tours/countries?with=price&lang=ukr&access_token=${ACCESS_TOKEN}`)
//         const countriesData = await fetchCountries.json()
//         setCountries(countriesData.countries)
//     }
//
//     return (
//         <div>
//             <select className={classes.countrySelect}>
//                 <option id="00">Choose country</option>
//                 {countries.map(country => {
//                     return (
//                         <option
//                             datatype='country'
//                             data-name={country.name}
//                             data-currency={country.currency}
//                             id={country.id}
//                             key={country.id}
//                             onChange={ e => onAddCountry(e.target.value)}
//                         >
//                             {country.name}
//                         </option>
//                     )
//                 })}
//             </select>
//         </div>
//     );
// };
// function mapStateToProps(state) {
//     return{
//         country: state.country
//     }
// }
// function mapDispatchToProps(dispatch){
//     return{
//         onAddCountry: id => dispatch({type: 'addCountry', payload: id})
//     }
// }
// export default connect(mapStateToProps, mapDispatchToProps)(Country);