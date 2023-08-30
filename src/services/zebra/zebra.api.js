import axios from 'axios';

const zebra = axios.create({
    baseURL: `${import.meta.env.VITE_SERVER}:${import.meta.env.VITE_PORT}/api/`
});

zebra.interceptors.response.use((config) => config, (error) => {
    const errorMsg = error?.response?.data?.message || error?.message;
    return Promise.reject({error: errorMsg, failed: true, code: error?.code});
});

export default zebra;