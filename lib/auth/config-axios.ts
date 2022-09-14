import axios from 'axios'

axios.defaults.baseURL = process.env.BACKEND_BASE_URL
axios.defaults.withCredentials = true

export default axios
