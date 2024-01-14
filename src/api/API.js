import axios from 'axios';

const API = axios.create({
    baseURL: 'https://api.openai.com/v1/images/generations',
    headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer sk-',
    },
});

export default API;

//content-type
