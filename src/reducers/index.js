import {FETCHING_DATA, DATA_RECIEVED, ERROR} from '../actions';

const initState = {
  githubData: [],
  fetchingData: false,
  fetchedData: false,
  hasErrors: false,
  status: '',
}

export const reducer = (state = initState, action) => {
  switch (action.type) {
    case FETCHING_DATA:
      return {
        fetchingData: true,
        status: action.payload
      }
    case DATA_RECIEVED:
      return Object.assign({}, state, {
        githubData: action.payload,
        fetchingData: false,
        fetchedData: true,
        status: '',
        
      })
    case ERROR:
      return {
        hasErrors: true,
      }
    default:
      return state;
  }
}
