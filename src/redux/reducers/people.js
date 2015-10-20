import Immutable from 'immutable';

const defaultState = new Immutable.List();

export default function todoReducer(state = defaultState, action) {
  switch (action.type) {
    case 'GET_PEOPLE':
      return state.concat(action.res.data);
    default:
      return state;
  }
}
