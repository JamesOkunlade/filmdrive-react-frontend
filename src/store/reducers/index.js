import { combineReducers } from 'redux';

import theme from './theme';
import movies from './movies';
import category from './category';


const rootReducer = combineReducers({
    thm: theme,
    mvs: movies,
    cat: category
})


export default rootReducer;