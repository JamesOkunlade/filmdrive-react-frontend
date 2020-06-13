import * as actionTypes from '../actions';


const initialState = {
    movies: [],
    isFetching: false,
    isSearching: true
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_MOVIES:
            return {
                ...state,
                movies: action.movies,
                isSearching: true
            }
        case actionTypes.FETCHING_MOVIES:
            return {
                ...state,
                isFetching: true
            }
        default: 
            return state;
    }
};

export default reducer;