import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://burger-project-js3.firebaseio.com/'
});

instance.interceptors.request.use(req => {
    console.log('In request interceptors', req);
    return req
});



export default instance;
