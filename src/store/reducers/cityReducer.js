import {initialState} from '../initialState'

export default function cityReducer(state= initialState, action){

    switch (action.type){
        case 'SELECTED_FLIGHT_FROM_CITY' :
            return {flightFromCity : action.selectedFlightFromCity}
        default:
            return state
    }
}