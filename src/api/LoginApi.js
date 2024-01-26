import axios from 'axios';

const LoginAPI = axios.create({
    baseURL: process.env.REACT_APP_SERVER_BASE_URL,
    headers: {
        accept: 'application/json;charset=UTF-8',
        'Content-Type': 'application/json;charset=UTF-8',
    },
});

export default LoginAPI;

//content-type
