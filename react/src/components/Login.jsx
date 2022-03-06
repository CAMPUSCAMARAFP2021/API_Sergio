import { useState } from "react";

const Login = ({onLoginClick}) => {
    const [user, setUser] = useState('');
    const [passwd, setPasswd] = useState('');

    const inputUserHandler = ({target}) => setUser(target.value);
    const inputPasswdHandler = ({target}) => setPasswd(target.value);

    return <>
        <br></br>
        <label for="floatingInput">Nombre</label>
        <input class="form-control" type="text" name={user} onChange={inputUserHandler}></input>
        <br></br>
        <label for="floatingPassword">Contraseña</label>
        <input class="form-control" type="password" name={passwd} onChange={inputPasswdHandler}></input>
        <br></br>
        <button class="w-100 btn btn-lg btn-primary"  onClick={() => onLoginClick(user,passwd)}>Login</button>

    </>
}

export default Login;