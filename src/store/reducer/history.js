
import { updateData } from '../utility';

const initialState = {
    history: []
};

const setSpacexHistory = (state, action) => {
    return updateData(state, {
        history: action.history
    });
};

const emptySpacexHistory = (state, action) => {
    return updateData(state, {
        history: []
    });
};

const History = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_HISTORY':
            return setSpacexHistory(state, action);
        case 'EMPTY_HISTORY':
            return emptySpacexHistory(state, action);
        default:
            return state;
    }
};

export default History;
