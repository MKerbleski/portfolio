import {FETCHING_DATA, DATA_RECIEVED, ERROR, TIME_RECIEVED, FETCHING_TIME} from '../actions';

const initState = {
  githubData: [],
  fetchingData: false,
  fetchedData: false,
  hasErrors: false,
  status: '',
  time: '',
}

export const reducer = (state = initState, action) => {
  switch (action.type) {
    case FETCHING_DATA:
      return Object.assign({}, state, {
        fetchingData: true,
        status: action.payload
      })
    case DATA_RECIEVED:
      return Object.assign({}, state, {
        githubData: action.payload,
        fetchingData: false,
        fetchedData: true,
        status: 'github repos fetched',
      })
    case FETCHING_TIME:
      return Object.assign({}, state, {
        fetchingTime: true,
      })
    case TIME_RECIEVED:
      return Object.assign({}, state, {
        fetchingTime: false,
        fetchedTime: true,
        status: 'last update fetched',
        time: action.payload
      })
    case ERROR:
      return {
        hasErrors: true,
      }
    default:
      return state;
  }
}
