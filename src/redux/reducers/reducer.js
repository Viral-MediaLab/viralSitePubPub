import { combineReducers } from 'redux';
// import multireducer from 'multireducer';
import { routerStateReducer } from 'redux-router';

import people from './people';
// import projects from './projects';
// import project from './project';

export default combineReducers({
  router: routerStateReducer,
  people
});
