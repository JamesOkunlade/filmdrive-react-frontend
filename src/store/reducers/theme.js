
import * as actionTypes from '../actions';

const initialState = {
    theme: {
        background: 'green',
        color: 'red'
    }
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_THEME:
            return {
                ...state,
                theme: {background: 'blue', color: 'black'}
            }
        default: return state;
    }
};


export default reducer;