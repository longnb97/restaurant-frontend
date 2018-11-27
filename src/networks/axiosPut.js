import axios from "axios";
import {API_ROOT} from '../statics'
axios.defaults.withCredentials = true;
export default axios.put(`${API_ROOT}/table/:tableId`)