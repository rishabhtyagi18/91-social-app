import { updateData } from '../utility';

const initialState = {
    address: []
};

const setSpacexAddress = (state, action) => {
    return updateData(state, {
        address: action.address
    });
};

const emptySpacexAddress = (state, action) => {
    return updateData(state, {
        address: []
    });
};

const Address = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_ADDRESS':
            return setSpacexAddress(state, action);
        case 'EMPTY_ADDRESS':
            return emptySpacexAddress(state, action);
        default:
            return state;
    }
};

export default Address;
