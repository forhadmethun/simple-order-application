import {orderConstants} from '../constants';

export function order(state = [], action) {
    switch (action.type) {
        case orderConstants.ORDER_ADD:
            return {
                type: 'order-add',
                message: action.payload
            };
        case orderConstants.ORDER_GET_ALL_REQUEST:
            return {
                type: 'order-get-all',
                message: action.payload
            };
        case orderConstants.ORDER_GET_ALL_SUCCESS:
            return action.payload;
        case orderConstants.ORDER_GET_ALL_FAILURE:
            return {};
        default:
            return state
    }
}