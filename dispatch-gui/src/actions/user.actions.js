import {userConstants} from '../constants';
import {alertActions} from './';
import {history} from '../helpers';
import {apiError} from "../util/error.processor";
import {UserServiceMock} from "../services/backend/mock/user.service.mock";
import {UserServiceReal} from "../services/backend/real/user.service.real";

const userService = new UserServiceMock();
// const userService = new UserServiceReal();

const login = (username, password) => async dispatch => {
    dispatch({
        type: userConstants.LOGIN_REQUEST,
        payload: {}
    });
    try {
        const response = await userService.login(username, password);
        localStorage.setItem('user', JSON.stringify(response));
        dispatch({
            type: userConstants.LOGIN_SUCCESS,
            payload: response
        });
        history.push('/');
    } catch (error) {
        dispatch({
            type: userConstants.LOGIN_FAILURE,
            payload: apiError(error)
        });
        dispatch(alertActions.error(apiError(error)));
    }
};

const register = (user) => async dispatch => {
    dispatch({
        type: userConstants.REGISTER_REQUEST,
        payload: {}
    });
    try {
        const response = await userService.register(user);
        dispatch({
            type: userConstants.REGISTER_SUCCESS,
            payload: {}
        });
        history.push('/login');
        dispatch(alertActions.success('Registration successful'));
    } catch (error) {
        dispatch({
            type: userConstants.REGISTER_FAILURE,
            payload: apiError(error)
        });
        dispatch(alertActions.error(apiError(error)));
    }
};

function logout() {
    userService.logout();
    return {type: userConstants.LOGOUT};
}

export const userActions = {
    login,
    logout,
    register
};