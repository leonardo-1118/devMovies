import axios from 'axios'

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
    params: {
        api_key: '6927a4d9b2d5f81969f2f9c31ede1d77',
        language: 'pt-BR',
        page: 1
    }
})

export default api