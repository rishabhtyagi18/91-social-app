import axios from 'axios';

// Created Axios instance to use it in whole application
var httpInstance = axios.create({
    headers: {
        'Content-Type': 'application/json'
    }
});

export default httpInstance;
