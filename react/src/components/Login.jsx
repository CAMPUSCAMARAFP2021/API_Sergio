import { useState } from "react";

const Login = ({onLoginClick}) => {
    const [user, setUser] = useState('');
    const [passwd, setPasswd] = useState('');

    const inputUserHandler = ({target}) => setUser(target.value);
    const inputPasswdHandler = ({target}) => setPasswd(target.value);

    return <>
        <input type="text" name={user} onChange={inputUserHandler}></input>
        <input type="password" name={passwd} onChange={inputPasswdHandler}></input>
        <button onClick={() => onLoginClick(user,passwd)}>Login</button>
    </>
}

export default Login;