export const SET_THEME = 'SET_THEME';
export const FETCH_MOVIES = 'FETCH_MOVIES';
export const FETCHING_MOVIES = 'FETCHING_MOVIES';
export const FETCH_ERROR = 'FETCH_ERROR'
export const LOAD_MOVIES = 'LOAD_MOVIES';



const fetchMovies = () => {
    const fetchUrl = 'https://financialmodelingprep.com/api/v3/search?query=AA&limit=9999&exchange=NASDAQ&apikey=ddb056dfeecb93aaa20254b2abff4887';
    return dispatch => {
        dispatch({type: FETCHING_MOVIES});
        return fetch(fetchUrl)
            .then(response => response.json())
            .then(movies => {
                dispatch({
                    type: FETCH_MOVIES,
                    movies: movies
                });
            })
            .catch(err => dispatch({
                type: FETCH_ERROR,
                error: err
            }))
    }
}

export { fetchMovies };




