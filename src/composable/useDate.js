export const useDate = () => {
    const getDay = (timestamp) => {
        const date = new Date(timestamp * 1000);
        return date.getDate();
    }

    const getMonthAndYear = (timestamp) => {
        const date = new Date(timestamp * 1000);
        const month = date.toLocaleString('en-En', {month: 'long'});
        const year = date.getFullYear();
        return `${month}\n${year}`;
    }

    return {getDay, getMonthAndYear};
}