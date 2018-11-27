import axios from "axios";
import { API_ROOT } from '../statics'

axios.defaults.withCredentials = true;

export const getAllTable = () => {
    return axios.get(`${API_ROOT}/tables/`)
}