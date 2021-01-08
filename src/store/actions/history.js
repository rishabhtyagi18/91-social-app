import axios from '../../httpHeaders/axios';

export const setHistory = (history) => ({
    type: 'SET_HISTORY',
    history
});

export const getHistory = () => {
    return dispatch => {
        axios.get(`https://api.spacexdata.com/v3/history`)
            .then(response => {
                if (response.data) {
                    dispatch(setHistory(response.data));
                }
            })
            .catch(error => {

            });
    };
};

export const emptyHistory = () => ({
    type: 'EMPTY_HISTORY',
});
