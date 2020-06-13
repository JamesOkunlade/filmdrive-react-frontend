import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import './assets/styles/app.scss';
import App from './components/App';
import theme from './store/reducers/theme';
import movies from './store/reducers/movies';


const rootReducer = combineReducers({
    thm: theme,
    mvs: movies
})


const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
     <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

