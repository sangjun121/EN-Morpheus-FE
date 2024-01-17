import axios from 'axios';

const API = axios.create({
    baseURL: process.env.REACT_APP_IMAGE_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
        Authorization: process.env.REACT_APP_OPENAI_API_KEY,
    },
});

export default API;

//content-type
