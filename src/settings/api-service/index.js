import axios from 'axios';

export const apiServer = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
});
