import { FETCH_CITIES } from '../actions/types';

const initialState = {
    list: []
}

export default function(state = initialState, action){
    switch (action.type){
        case FETCH_CITIES:
            {
                return {
                    ...state,
                    list: action.payload.list
                }
            }
        default: return state;
    }
}