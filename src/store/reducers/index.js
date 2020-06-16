import { combineReducers } from 'redux';

import theme from './theme';
import movies from './movies';


const rootReducer = combineReducers({
    thm: theme,
    mvs: movies
})


export default rootReducer;