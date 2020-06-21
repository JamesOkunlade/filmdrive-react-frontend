import {
  REQUEST_MOVIES,
  RECEIVE_MOVIES,
  ERROR_REQUESTING_MOVIES,
} from "../actions";

const initialState = {
  movies: [],
  moviesFetchStatus: null,
  isFetching: false,
  error: null,
  lastUpdated: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_MOVIES: {
      return {
        ...state,
        isFetching: true
      }
    }
    case RECEIVE_MOVIES: {
      return {
        ...state,
        isFetching: false,
        lastUpdated: action.receivedAt,
        moviesFetchStatus: action.fetchStatus,
        movies: [...state.movies.slice(state.movies.length), ...action.movies],
      };
    }
    case ERROR_REQUESTING_MOVIES: {
      return {
        ...state,
        isFetching: false,
        moviesFetchStatus: action.fetchStatus,
        error:action.error
      }
    }
    default: {
      return state;
    }
  }
};

export default reducer;
