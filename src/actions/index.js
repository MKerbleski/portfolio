import axios from 'axios';

export const FETCHING_DATA = 'FETCHING_DATA';
export const FETCHING_TIME = 'FETCHING_TIME';
export const DATA_RECIEVED = 'DATA_RECIEVED';
export const TIME_RECIEVED = 'TIME_RECIEVED';
export const ERROR = 'ERROR';

export const connnectGithub = () => {
  return function(dispatch){
    setTimeout( ()=> {
      dispatch({type: FETCHING_DATA, payload:"retreiving projets from github"});
      axios.get('https://api.github.com/users/mkerbleski/repos').then(res => {
        dispatch({type: DATA_RECIEVED, payload: res.data});
      }).catch(err => {
        dispatch({type: ERROR, payload: err})
      })
    })
  }
}

export const getTime = () => {
  return function(dispatch){
    dispatch({type: FETCHING_TIME, payload: 'fetching time'})
    axios.get('https://api.github.com/repos/mkerbleski/portfolio').then(res => {
      dispatch({type: TIME_RECIEVED, payload: res.data})
    }).catch(err => {
      dispatch({type: ERROR, payload: err})
    })
  }
}
