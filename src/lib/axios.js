import axios from 'axios'

const baseURL = 'https://fsd-h8-ocbc-my-movies.herokuapp.com'

export const baseEndpoint = axios.create({ baseURL: `${baseURL}` })
export const movieEndpoint = axios.create({ baseURL: `${baseURL}/movies` })
export const studioEndpoint = axios.create({ baseURL: `${baseURL}/studios` })
