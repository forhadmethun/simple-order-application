import React, {useEffect} from 'react';
import {Router, Route, Switch, Redirect} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {history} from './helpers';
import {alertActions} from './actions';
import PrivateRoute from './components/PrivateRoute';
import HomePage from './components/HomePage';
import LoginPage from './components/LoginPage';
import {ROOT_ROUTE, LOGIN_ROUTE} from "./util/constant/route.constant";

const App = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        history.listen((location, action) => {
            dispatch(alertActions.clear());
        });
    }, []);

    return (
        <div className="jumbotron">
            <div className="container">
                <div className="col-md-8 offset-md-2">
                    <Router history={history}>
                        <Switch>
                            <PrivateRoute exact path={ROOT_ROUTE} component={HomePage}/>
                            <Route path={LOGIN_ROUTE} component={LoginPage}/>
                            <Redirect from="*" to={ROOT_ROUTE}/>
                        </Switch>
                    </Router>
                </div>
            </div>
        </div>
    );
}

export default App;