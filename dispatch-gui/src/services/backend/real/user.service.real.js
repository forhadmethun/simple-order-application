import {config} from "../../../util/config";
import axios from "axios";
import {RegistrationInfo} from "../../../model/registration.info";
import {UserService} from "../definition/user.service";

export class UserServiceReal extends UserService {
    login(username, password) {
        const requestOptions = {
            url: `${config.apiUrl}/login`,
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            data: { "emailAddress": username,"password":password }
        };
        return axios(requestOptions)
            .then(response => {
                return response.data;
            });
    }
    register(user){
        const registrationInfo = new RegistrationInfo(
            user.firstName,
            user.lastName,
            user.company,
            user.username,
            user.password,
            user.phone,
            user.offerCode,
            user.country
        );
        const data = registrationInfo.getRequestBody();
        const requestOptions = {
            url: `${config.apiUrl}/registration`,
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
    logout(token) {
        localStorage.removeItem('user');
    }
}