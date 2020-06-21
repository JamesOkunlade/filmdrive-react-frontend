import { REQUEST_MOVIE_BY_ID, RECEIVE_MOVIE_BY_ID, ERROR_REQUESTING_MOVIE_BY_ID } from '../actions';


const initialState = {
    movie: {},
    movieFetchStatus: null,
    isFetching: false,
    error: null,
}


const reducer = (state=initialState, action) =>  {
    switch (action.type) {
        case REQUEST_MOVIE_BY_ID: {
          return {
              ...state,
              movie: {},
              isFetching: true
          }
        }
        case RECEIVE_MOVIE_BY_ID: {
          return {
            ...state,
            isFetching: false,
            movieFetchStatus: action.fetchStatus,
            movie: {...action.movie},
          };
        }
        case ERROR_REQUESTING_MOVIE_BY_ID: {
            return {
                ...state,
                isFetching: false,
                error: action.error,
                movieFetchStatus: action.fetchStatus
            }
        }
        default: {
          return state;
        }
      }

}

export default reducer;