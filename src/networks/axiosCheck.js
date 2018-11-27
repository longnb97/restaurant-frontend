import axios from "axios";
import {AUTH_ROOT} from '../statics'
axios.defaults.withCredentials = true;
export default axios.get(`${AUTH_ROOT}/login/check`)


