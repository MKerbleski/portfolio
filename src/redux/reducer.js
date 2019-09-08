import {   
    UPDATE_LOGS,
    CREATE_SESSION,
} from './actions';

const initialState = {    
    tracker: [],
}

const reducer = (state=initialState, action) => {
    switch(action.type) {
        case UPDATE_LOGS:
            const newTracker = state.tracker
            newTracker.push(action.payload)
            return Object.assign({}, state, {
                tracker: newTracker,
            })
        case CREATE_SESSION:
            return Object.assign({}, state, {
                session: action.payload,
            })
        default: 
            return state;
    }
}

export default reducer