import axios from 'axios';

const GetShows = () => {
    const { endpoint } = process.env;
    return axios.get(`${endpoint}/search/shows?q=batman`)
}

const GetShowById = (id: string) => {
    const { endpoint } = process.env;
    return axios.get(`${endpoint}/shows/${id}`)
}

export default {
    GetShows,
    GetShowById,
}
