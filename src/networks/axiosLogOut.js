import axios from 'axios'
import {AUTH_ROOT} from '../statics'
axios.defaults.withCredentials = true;
export const logout = () => axios.get(`${AUTH_ROOT}/logout`);