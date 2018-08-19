import axios from 'axios';

export const FETCHING_DATA = 'FETCHING_DATA';
export const DATA_RECIEVED = 'DATA_RECIEVED';
export const ERROR = 'ERROR';

export const connnectGithub = () => {
  return function(dispatch){
    setTimeout( ()=> {
      dispatch({type: FETCHING_DATA, payload:"retreiving projets from github"});
      axios.get('https://api.github.com/users/mkerbleski/repos').then(res => {
        dispatch({type: DATA_RECIEVED, payload: res.data})
      }).catch(err => {
        dispatch({type: ERROR, payload: err})
      })
    }, 2000)
  }
}
