import { createStore } from 'redux';

// Comment out this and devToolsEnhancer() for production.
import devToolsEnhancer from 'remote-redux-devtools';

// Using constants to avoid typos from string literals.
import CHANGE_VIEW from '../actions/constants';

// Centralized application state
// For more information visit http://redux.js.org/
const initialState = { view: 'root' };

/* First parameter for createStore() is a reducer, or
 * in this case, treating the whole thing as a reducer.
 * TODO Create separate reducers if/when app grows.
 * TODO Use combineReducers() to merge reducers into one.
 */
const store = createStore((state = initialState, action) => {
  switch (action.type) {
    case CHANGE_VIEW:
      return { ...state, view: action.view };
    default:
      return state;
  }
}, devToolsEnhancer());

export default store;
