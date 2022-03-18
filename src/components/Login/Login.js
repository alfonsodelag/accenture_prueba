import React, { useState } from 'react';
import { Button, Typography } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

const Login = (props) => {

    const { onLogin } = props;

    const [enteredEmail, setEnteredEmail] = useState('');
    const [emailIsValid, setEmailIsValid] = useState('');
    const [enteredPassword, setEnteredPassword] = useState('');
    const [passwordIsValid, setPasswordIsValid] = useState('');
    const [formIsValid, setFormIsValid] = useState('');

    const emailChangeHandler = event => {
        setEnteredEmail(event.target.value);

        setFormIsValid(event.target.value.includes('@') && enteredPassword.trim().length > 6);
    };

    const passwordChangeHandler = event => {
        setEnteredPassword(event.target.value);

        setFormIsValid(event.target.value.trim().length > 6 && enteredEmail.includes('@'));
    };

    const validateEmailHandler = () => {
        setEmailIsValid(enteredEmail.includes('@'));
    };

    const validatePasswordHandler = () => {
        setPasswordIsValid(enteredPassword.trim().length > 6)
    };

    const submitHandler = event => {
        event.preventDefault();

        onLogin(enteredEmail, enteredPassword);
    };

    return (
        <div className="flex justify-center items-center h-screen border">
            <div>
                <LockOutlinedIcon classNames="" style={{ color: '#4080E0' }} />
                <form>
                    <div>
                        <label>
                            <input
                                type="email"
                                id="email"
                                placeholder="email"
                                className="border-b-2"
                                style={{ color: '#5F6667' }}
                                onChange={emailChangeHandler}
                                onBlur={validateEmailHandler}
                            />
                        </label>
                    </div>
                    <div>
                        <label>
                            <input
                                type="password"
                                id="password"
                                placeholder="password"
                                className="border-b-2"
                                style={{ color: '#5F6667' }}
                                onChange={passwordChangeHandler}
                                onBlur={validatePasswordHandler}
                            />
                        </label>
                    </div>
                    <div>
                        <Button style={{ backgroundColor: '#214B84' }} disabled={!formIsValid}>
                            <Typography className="capitalize text-white">Log In</Typography>
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login;