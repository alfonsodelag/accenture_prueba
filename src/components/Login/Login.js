import React, { useState } from 'react';
import { Button, Typography } from '@mui/material';
import Padlock from '../../assets/padlock.png'
import './Login.css'

const Login = (props) => {

    const { onLogin } = props;

    const [enteredEmail, setEnteredEmail] = useState('');
    const [emailIsValid, setEmailIsValid] = useState('');
    const [enteredPassword, setEnteredPassword] = useState('');
    const [passwordIsValid, setPasswordIsValid] = useState('');
    const [formIsValid, setFormIsValid] = useState('');

    const emailChangeHandler = event => {
        setEnteredEmail(event.target.value);

        console.log("event.target.value", event.target.value);

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
        <div className="flex justify-center items-center h-screen">
            <div className="w-1/2">
                <img src={Padlock} className="object-contain m-auto mb-16 w-2/5 md:w-1/4" />
                <form onSubmit={submitHandler}>
                    <div className="mb-5">
                        <label>
                            <input
                                type="email"
                                id="email"
                                placeholder="E-mail"
                                className="border-b-2 w-full"
                                style={{ color: '#5F6667' }}
                                onChange={emailChangeHandler}
                                onBlur={validateEmailHandler}
                            />
                        </label>
                    </div>
                    <div className="mb-5">
                        <label>
                            <input
                                type="password"
                                id="password"
                                placeholder="Password"
                                className="border-b-2 w-full"
                                style={{ color: '#5F6667' }}
                                onChange={passwordChangeHandler}
                                onBlur={validatePasswordHandler}
                            />
                        </label>
                    </div>
                    <div className="flex justify-center w-full">
                        <Button className="w-full" type="submit" disabled={!formIsValid} style={{ backgroundColor: '#214B84' }} >
                            <Typography className="capitalize text-white">Log In</Typography>
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login;