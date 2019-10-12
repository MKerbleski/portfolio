import axios from 'axios'

export const UPDATE_LOGS = 'UPDATE_LOGS';
export const CREATE_SESSION = 'CREATE_SESSION';
export const ADD_NAME_TO_SESSION = 'ADD_NAME_TO_SESSION';
export const ERROR = 'ERROR';

export const sendLogs = (data) => {
    return function(dispatch){
        axios.post(`${process.env.REACT_APP_ANALYTICS_URL}`, data).then(res => {
          }).catch(err => {
            console.log('err')
          })
    }
}

export const updateLogs = (log) => {
    return function(dispatch){
        dispatch({type: UPDATE_LOGS, payload: log})
    }
}

export const createSession = (uuid) => {
    return function(dispatch){
        dispatch({type: CREATE_SESSION, payload: {
            uuid: uuid,
            startTime: Date.now(),
        }})
    }
}
export const addToSession = (name) => {
    return function(dispatch){
        dispatch({type: ADD_NAME_TO_SESSION, payload: name})
    }
}