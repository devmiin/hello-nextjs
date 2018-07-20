import axios from 'axios';

const getShows = () => {
    const { endpoint } = process.env;
    return axios.get(`${endpoint}/search/shows?q=batman`)
}

const getShowById = (id: string) => {
    const { endpoint } = process.env;
    return axios.get(`${endpoint}/shows/${id}`)
}

export default {
    getShows,
    getShowById,
}
