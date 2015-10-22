import Immutable from 'immutable';

const LOAD = 'projects/LOAD';
const LOAD_SUCCESS = 'projects/LOAD_SUCCESS';
const LOAD_FAIL = 'projects/LOAD_FAIL';

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
    case 'CLEAR_PROJECTS':
      return {
        ...state,
        data: new Immutable.List()
      };
    default:
      return state;
  }
}

export function loadProjects(projectList) {
  console.log('in load projects');
  return {
    types: [LOAD, LOAD_SUCCESS, LOAD_FAIL],
    promise: (client) => client.post('/loadProjects', {data:projectList}) // params not used, just shown as demonstration
  };
}

export function clearProjects() {
  console.log('in clear projects');
  return {
    type: 'CLEAR_PROJECTS'
  };
}
