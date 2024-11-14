import axios from 'axios';
import { API_KEY_TMDB } from '@env';

const apiClient = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    headers: {
        'Content-Type': 'application/json',
    },
    params: {
        api_key: API_KEY_TMDB,
    },
});

export default apiClient;
