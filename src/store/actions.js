import axios from 'axios';

export const SET_THEME = 'SET_THEME';
export const REQUEST_MOVIES = 'REQUEST_MOVIES';
export const RECEIVE_MOVIES = 'RECEIVE_MOVIES';
export const ERROR_REQUESTING = 'ERROR_REQUESTING';


function requestMovies() {
    return {
        type: REQUEST_MOVIES
    }
}

function receiveMovies(res) {
    return {
        type: RECEIVE_MOVIES,
        movies: res.data.movies,
        receivedAt: Date.now()
    }
}

function errorRequesting(err) {
    return {
        type: ERROR_REQUESTING,
        error: err
    }
}

export function fetchMovies() {
    return function(dispatch) {
        dispatch(requestMovies())
        return axios.get('https://yts.mx/api/v2/list_movies.json')
            .then(response => response)
            .then(response => dispatch(receiveMovies(response)))
            .catch(err => dispatch(errorRequesting(err)))
    }
}





