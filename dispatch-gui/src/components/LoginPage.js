import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {userActions} from '../actions';
import {Button, Form, Grid, Header, Message} from 'semantic-ui-react';

const LoginPage = () => {
    const alert = useSelector(state => state.alert);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(userActions.logout());
    }, []);

    const doLogin = () => {
        if (username && password) {
            dispatch(userActions.login(username, password));
        }
    };

    const buttonStyle = {backgroundColor: '#99dd2c'};
    const linkStyle = {color: '#99dd2c'};
    return (
        <div>
            <Grid textAlign='center' style={{height: '100vh'}} verticalAlign='middle'>
                <Grid.Column style={{maxWidth: 350}}>
                    <Header as='h1' textAlign='center'>
                        Log in to your account
                    </Header>
                    <Form size='large'>
                        <Form.Input
                            type="text"
                            name="username"
                            value={username}
                            onChange={e => setUsername(e.target.value)}
                            placeholder='E-mail address'/>
                        <Form.Input
                            fluid
                            icon='lock'
                            // iconPosition='right'
                            placeholder='Password'
                            type='password'
                            name="password"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                        />
                        <Button style={buttonStyle} fluid size='large' onClick={() => doLogin()}>
                            Login
                        </Button>
                    </Form>
                    <div style={{ paddingTop: '5px', alignContent : 'center'}}>
                        <h3>Credential for Login</h3>
                        <p>Email: forhad@gmail.com</p>
                        <p>Password: Hello1234</p>


                    </div>
                    <br/>
                    {alert.message &&
                    <Message negative>
                        <p>{alert.message}</p>
                    </Message>
                    }
                </Grid.Column>
            </Grid>
        </div>
    );
};

export default LoginPage;