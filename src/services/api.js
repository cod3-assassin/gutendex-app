import axios from 'axios';

const BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://skunkworks.ignitesol.com:8000';

const apiClient = axios.create({
    baseURL: BASE_URL,
    timeout: 5000, // 5-second timeout
});

const getBooks = async (url = null, params = {}) => {
    try {
        return url ? await axios.get(url, { params }) : await apiClient.get('/books', { params });
    } catch (error) {
        console.error('API Error:', error);
        throw error;
    }
};

export default { getBooks };