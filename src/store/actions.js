export const SET_THEME = 'SET_THEME';
export const REQUEST_MOVIES = 'REQUEST_MOVIES';
export const RECEIVE_MOVIES = 'RECEIVE_MOVIES';
export const ERROR_REQUESTING_MOVIES = 'ERROR_REQUESTING_MOVIES';
export const SET_CATEGORY = 'SET_CATEGORY';


export const REQUEST_CATEGORIES = 'REQUEST_CATEGORIES';
export const RECEIVE_CATEGORIES = 'RECEIVE_CATEGORIES';
export const ERROR_REQUESTING_CATEGORIES = 'ERROR_REQUESTING_CATEGORIES';
export const REQUEST_MOVIES_BY_CATEGORY = 'REQUEST_MOVIES_BY_CATEGORY';
export const RECEIVE_MOVIES_BY_CATEGORY = 'RECEIVE_MOVIES_BY_CATEGORY';
export const ERROR_REQUESTING_MOVIES_BY_CATEGORY = 'ERROR_REQUESTING_MOVIES_BY_CATEGORY';


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

function errorRequestingMovies(error) {
    return {
        type: ERROR_REQUESTING_MOVIES,
        error: error,
    }
}

export function fetchMovies() {
    return function(dispatch) {
        dispatch(requestMovies())
        return fetch(`https://yts.mx/api/v2/list_movies.json?limit=50`)
            .then(response => response.json())
            .then(response => dispatch(receiveMovies(response)))
            .catch(error => dispatch(errorRequestingMovies(error)))
    }
}




// FETCH MOVIES BY CATEGORY ACTIONS CREATORS

function fetchMoviesByCategory(category) {
    return function(dispatch) {
        dispatch(requestMovies())
        return fetch(`https://yts.mx/api/v2/list_movies.json?limit=50&genre=${category}`)
            .then(response => response.json())
            .then(response => dispatch(receiveMovies(response)))
            .catch(error => dispatch(errorRequestingMovies(error)))
    }
}

function setCategory(category) {
    return {
        type: SET_CATEGORY,
        category: category
    }
}

export function setCategoryFilter(category) {
    return function(dispatch) {
        dispatch(setCategory(category))
        dispatch(fetchMoviesByCategory(category))
    }
}





