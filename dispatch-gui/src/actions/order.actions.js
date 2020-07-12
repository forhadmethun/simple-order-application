import {orderConstants} from '../constants';
import {alertActions} from './';
import {apiError} from "../util/error.processor";
import {OrderService} from "../services/backend/order.service";

const orderService = new OrderService();

const getAllOrder = () => async dispatch => {
    try {
        const response = await orderService.getAllOrder();
        dispatch({
            type: orderConstants.ORDER_GET_ALL_SUCCESS,
            payload: response
        });
    } catch (error) {
        dispatch({
            type: orderConstants.ORDER_GET_ALL_FAILURE,
            payload: apiError(error)
        });
        dispatch(alertActions.error(apiError(error)));
    }
};

const addOrder = (orderInfo) => async dispatch => {
    try {
        const response = await orderService.addOrder(orderInfo);
        dispatch({
            type: orderConstants.ORDER_ADD_SUCCESS,
            payload: response
        });
        window.location.reload();
    } catch (error) {
        dispatch({
            type: orderConstants.ORDER_ADD_FAILURE,
            payload: apiError(error)
        });
        dispatch(alertActions.error(apiError(error)));
    }
};

export const orderAction = {
    getAllOrder,
    addOrder
};