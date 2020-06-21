export const SET_THEME = 'SET_THEME';
export const REQUEST_MOVIES = 'REQUEST_MOVIES';
export const RECEIVE_MOVIES = 'RECEIVE_MOVIES';
export const ERROR_REQUESTING_MOVIES = 'ERROR_REQUESTING_MOVIES';
export const SET_CATEGORY = 'SET_CATEGORY';
export const REQUEST_MOVIE_BY_ID = 'REQUEST_MOVIE_BY_ID';
export const RECEIVE_MOVIE_BY_ID = 'FETCH_MOVIE_BY_ID'
export const ERROR_REQUESTING_MOVIE_BY_ID = 'ERROR_REQUESTING_MOVIE_BY_ID';



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
    return async function(dispatch) {
        dispatch(requestMovies())
        try {
            const response = await fetch(`https://yts.mx/api/v2/list_movies.json?limit=50`);
            const response_1 = await response.json();
            return dispatch(receiveMovies(response_1));
        }
        catch (error) {
            return dispatch(errorRequestingMovies(error));
        }
    }
}




// FETCH MOVIES BY CATEGORY ACTIONS CREATORS

function fetchMoviesByCategory(category) {
    return async function(dispatch) {
        dispatch(requestMovies())
        try {
            const response = await fetch(`https://yts.mx/api/v2/list_movies.json?limit=50&genre=${category}`);
            const response_1 = await response.json();
            return dispatch(receiveMovies(response_1));
        }
        catch (error) {
            return dispatch(errorRequestingMovies(error));
        }
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
        if (category === 'All') {
            dispatch(fetchMovies())
        } else{
            dispatch(fetchMoviesByCategory(category))
        }
    }
}

// FETCH MOVIE BY ID ACTIONS CREATORS

function requestMovieById() {
    return {
        type: REQUEST_MOVIE_BY_ID
    }
}

function receiveMovieById(response) {
    return {
        type: RECEIVE_MOVIE_BY_ID,
        movie: response.data.movie,
        fetchStatus: response.status,
    }
}

function errorRequestingMovieById(error) {
    return {
        type: ERROR_REQUESTING_MOVIE_BY_ID,
        error: error,
    }
}

export function fetchMovieById(movieId) {
    return async function(dispatch) {
        dispatch(requestMovieById())
        try {
            const response = await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${movieId}`);
            const response_1 = await response.json();
            return dispatch(receiveMovieById(response_1));
        }
        catch (error) {
            return dispatch(errorRequestingMovieById(error));
        }
    }
}




