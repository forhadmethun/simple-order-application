import mockUsers from '../../../resources/mock-data/registered-users';
import {UserService} from "../definition/user.service";

export class UserServiceMock extends UserService {
    constructor() {
        super();
        this.users = mockUsers;
    }
    login(username, password) {
        let users = this.users;
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const user = users.find(x => x.emailAddress === username && x.password === password);
                if (!user) reject({ message: 'Username or password is incorrect'});
                const userTokenObj = {'accessToken': 'abc.def.ghi'};
                resolve(userTokenObj);
            }, 500);
        })
    }
    register(registrationInfo){
        let users = this.users; // JSON.parse(localStorage.getItem('users')) || [];
        const data = registrationInfo.getRequestBody();
        localStorage.setItem('users', JSON.stringify(users));
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (users.find(x => x.emailAddress === registrationInfo.username)) {
                    return reject({ message : `Username  ${registrationInfo.username} is already taken`});
                }
                registrationInfo.id = users.length ? Math.max(...users.map(x => x.id)) + 1 : 1;
                users.push(data);
                resolve('');
            }, 500);
        });
    }
    logout(token) {
        localStorage.removeItem('user');
    }
    isLoggedIn(headers) {
        return headers['Authorization'] === 'Bearer abc.def.ghi';
    }
    ok(resolve, body) {
        resolve({ok: true, text: () => Promise.resolve(JSON.stringify(body))});
    }
    unauthorized(resolve) {
        resolve({status: 401, text: () => Promise.resolve(JSON.stringify({message: 'Unauthorized'}))});
    }
    error(resolve, message) {
        resolve({status: 400, text: () => Promise.resolve(JSON.stringify({message}))});
    }
    idFromUrl(url) {
        const urlParts = url.split('/');
        return parseInt(urlParts[urlParts.length - 1]);
    }

}