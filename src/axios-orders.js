import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-todo-app-8e166.firebaseio.com/'
})

export default instance;