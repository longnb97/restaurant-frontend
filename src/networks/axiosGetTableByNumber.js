import axios from "axios";
import { API_ROOT } from '../statics'

axios.defaults.withCredentials = true;

export const getTableByNumber = (tableNumber) => {
    return axios.get(`${API_ROOT}/tables/tablenumber/${tableNumber}`)
}