import {initialState} from '../initialState'

export default function rootReducer(state= initialState, action){

    switch (action.type){
        case 'SELECTED_COUNTRY' :
            return { countryTo: action.selectedOption};
        default:
            return state
    }
}