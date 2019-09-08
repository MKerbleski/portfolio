import uuid from 'uuid/v1'

// export const sendLogs = (id) => {
//     return function(dispatch){
//         dispatch({type: DELETING_NOTE})
//         axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/notes/${id}`, getAuthHeader()).then(res => {
//             dispatch({type: NOTE_DELETED})
//             dispatch(getDeletedNotes())
//         }).catch(err => {
//             console.log("error deleting note", err.message)
//             dispatch({type: ERROR_DELETING_NOTE})
//         })
//     }
// }

// export const updateLogs = () => {
//     return function(dispatch){
//         dispatch({type: UPDATE_LOGS})
//     }
// }

// export const createSession = () => {
//     return function(dispatch){

//         dispatch({type: CREATE_SESSION})
//     }
// }