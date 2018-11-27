import axios from "axios";
import {API_ROOT} from '../statics'
axios.defaults.withCredentials = true;
export const changeTableStatus = (tableNumber) => {
    axios.put(`${API_ROOT}/table/tablenumber/${tableNumber}`
}