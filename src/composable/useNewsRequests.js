import zebra from '@/services/zebra/zebra.api';

export const useNewsRequests = () => {
    const get = (page = 1) => {
        return zebra.get(`news/${page}`);
    };
    return {get};
}