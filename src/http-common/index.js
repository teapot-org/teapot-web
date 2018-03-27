import axios from 'axios'

import {HOST} from '../constants/app'

const _axios = axios.create();
_axios.defaults.baseURL = HOST;

export default _axios;