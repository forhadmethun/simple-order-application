import {config} from "../../util/config";
import axios from "axios";

export class OrderService{
    getAllOrder() {
        const requestOptions = {
            url: `${config.apiUrl}/order`,
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        };
        return axios(requestOptions)
            .then(response => {
                return response.data;
            });
    }
    addOrder(orderInfo){
        const data = orderInfo.getRequestBody();
        const requestOptions = {
            url: `${config.apiUrl}/order`,
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            data: data
        };
        return axios(requestOptions)
            .then(response => {
                return response.data;
            });
    }
}