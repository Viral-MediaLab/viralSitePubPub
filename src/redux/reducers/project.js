import Immutable from 'immutable';

const LOAD = 'project/LOAD';
const LOAD_SUCCESS = 'project/LOAD_SUCCESS';
const LOAD_FAIL = 'project/LOAD_FAIL';

const defaultState = new Immutable.Map({
  data: new Immutable.List()
});

export default function projectReducer(state = defaultState, action) {
  switch (action.type) {
    case LOAD:
      console.log('in Load');
      return {
        ...state,
        loading: true
      };
    case LOAD_SUCCESS:
      console.log('in load success');
      // console.log(action);
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
    case 'CLEAR_PROJECT':
      return {
        ...state,
        data: new Immutable.List()
      };
    default:
      return state;
  }
}

export function loadProject(projectName) {
  console.log('in load project');
  return {
    types: [LOAD, LOAD_SUCCESS, LOAD_FAIL],
    promise: (client) => client.post('/loadProject', {data:[projectName]}) // params not used, just shown as demonstration
  };
}

export function clearProject() {
  console.log('in clear project');
  return {
    type: 'CLEAR_PROJECT'
  };
}
