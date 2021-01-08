import axios from '../../httpHeaders/axios';

export const setAddress = (address) => ({
    type: 'SET_ADDRESS',
    address
});

export const getAddress = () => {
    return dispatch => {
        axios.get(`https://api.spacexdata.com/v3/payloads`)
            .then(response => {
                if (response.data) {
                    dispatch(setAddress(response.data));
                }
            })
            .catch(error => {

            });
    };
};

export const emptyAddress = () => ({
    type: 'EMPTY_ADDRESS',
});
