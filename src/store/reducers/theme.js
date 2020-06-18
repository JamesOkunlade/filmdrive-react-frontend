
import { SET_THEME } from '../actions';

const initialState = {
    theme: {
        background: 'white',
        color: 'black'
    }
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_THEME:
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