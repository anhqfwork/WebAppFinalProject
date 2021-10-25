import Axios from 'axios'

export const axios = Axios.create({
    baseURL: 'http://localhost:5000',
    headers: { Auth: 'Simple AUTH' },
    withCredentials: true,
})
