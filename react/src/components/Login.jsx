import { useState } from "react";

const Login = ({onLoginClick}) => {
    const [user, setUser] = useState('');
    const [passwd, setPasswd] = useState('');

    const inputUserHandler = ({target}) => setUser(target.value);
    const inputPasswdHandler = ({target}) => setPasswd(target.value);

    return <>
        <h1>LOGIN</h1>
        <br></br>
        <label for="floatingInput">Nombre</label>
        <input class="form-control" type="text" name={user} onChange={inputUserHandler}></input>
        <br></br>
        <label for="floatingPassword">Contraseña</label>
        <input class="form-control" type="password" name={passwd} onChange={inputPasswdHandler}></input>
        <br></br>
        <button class="btn-lg btn-primary" onClick={() => onLoginClick(user,passwd)}>Login</button>
        <br></br><br></br><br></br>
    </>
}

export default Login;