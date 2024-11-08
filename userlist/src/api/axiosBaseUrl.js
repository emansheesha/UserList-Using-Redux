import axios from 'axios';
const axiosBaseUrl = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
});
export default axiosBaseUrl;