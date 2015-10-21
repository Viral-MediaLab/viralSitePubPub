import Immutable from 'immutable';

const LOAD = 'people/LOAD';
const LOAD_SUCCESS = 'people/LOAD_SUCCESS';
const LOAD_FAIL = 'people/LOAD_FAIL';

const defaultState = new Immutable.Map({
  data: new Immutable.List()
});

export default function todoReducer(state = defaultState, action) {
  switch (action.type) {
    case LOAD:
      console.log('in Load');
      return {
        ...state,
        loading: true
      };
    case LOAD_SUCCESS:
      console.log('in load success');
      console.log(action);
      return {
        ...state,
        loading: false,
        loaded: true,
        data: action.result,
        error: null
      };
    case LOAD_FAIL:
      return {
        ...state,
        loading: false,
        loaded: false,
        data: null,
        error: action.error
      };
    case 'CLEAR_PEOPLE':
      return {
        ...state,
        data: new Immutable.List()
      };
    default:
      return state;
  }
}

export function loadPeople() {
  console.log('in load people');
  return {
    types: [LOAD, LOAD_SUCCESS, LOAD_FAIL],
    promise: (client) => client.get('/widget/load/param1/param2') // params not used, just shown as demonstration
  };
}

export function clearPeople() {
  console.log('in clear people');
  return {
    type: 'CLEAR_PEOPLE'
  };
}
