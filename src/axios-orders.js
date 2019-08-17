import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://react-my-fault.firebaseio.com/',
});

export default instance;
