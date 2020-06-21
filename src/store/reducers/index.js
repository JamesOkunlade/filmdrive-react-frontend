import { combineReducers } from 'redux';

import theme from './theme';
import movies from './movies';
import category from './category';
import singleMovie from './singleMovie';


const rootReducer = combineReducers({
    thm: theme,
    mvs: movies,
    cat: category,
    smv: singleMovie
})


export default rootReducer;