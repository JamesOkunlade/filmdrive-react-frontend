export const SET_THEME = 'SET_THEME';
export const REQUEST_MOVIES = 'REQUEST_MOVIES';
export const RECEIVE_MOVIES = 'RECEIVE_MOVIES';
export const ERROR_REQUESTING_MOVIES = 'ERROR_REQUESTING_MOVIES';
export const REQUEST_CATEGORIES = 'REQUEST_CATEGORIES';
export const RECEIVE_CATEGORIES = 'RECEIVE_CATEGORIES';
export const ERROR_REQUESTING_CATEGORIES = 'ERROR_REQUESTING_CATEGORIES';
export const REQUEST_MOVIES_BY_CATEGORIES = 'REQUEST_MOVIES_BY_CATEGORIES';
export const RECEIVE_MOVIES_BY_CATEGORIES = 'RECEIVE_MOVIES_BY_CATEGORIES';
export const ERROR_REQUESTING_MOVIES_BY_CATEGORIES = 'ERROR_REQUESTING_MOVIES_BY_CATEGORIES';


// FETCH MOVIES ACTIONS CREATORS

function requestMovies() {
    return {
        type: REQUEST_MOVIES
    }
}

function receiveMovies(response) {
    return {
        type: RECEIVE_MOVIES,
        movies: response.data.movies,
        fetchStatus: response.status,
        receivedAt: Date.now()
    }
}

function errorRequesting(err) {
    return {
        type: ERROR_REQUESTING_MOVIES,
        error: err,
    }
}

export function fetchMovies() {
    return function(dispatch) {
        dispatch(requestMovies())
        return fetch('https://yts.mx/api/v2/list_movies.json')
            .then(response => response.json())
            .then(response => dispatch(receiveMovies(response)))
            .catch(error => dispatch(errorRequesting(error)))
    }
}

// FETCH CATEGORIES ACTIONS CREATORS

function requestCategories() {

}

function receiveCategories() {

}

function errorRequestingCategories() {

}

export function fetchCategories() {

}

// FETCH MOVIES BY CATEGORY ACTIONS CREATORS

export function fetchMoviesByCategory() {

}





