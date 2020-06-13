
import * as actionTypes from '../actions';

const initialState = {
    theme: {
        background: 'white',
        color: 'black'
    }
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_THEME:
            return {
                ...state,
                theme: {
                    ...state.theme,
                    background: 'black', color: 'white'
                }
            }
        default: 
            return state;
    }
};


export default reducer;