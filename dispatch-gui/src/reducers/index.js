import {combineReducers} from 'redux';
import {authentication} from './authentication.reducer';
import {alert} from './alert.reducer';
import {order} from './order.reducer';

const rootReducer = combineReducers({
    authentication: authentication,
    alert: alert,
    order: order,
});

export default rootReducer;