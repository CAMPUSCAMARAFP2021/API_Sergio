import { useState } from "react";

const Login = ({onRegisterClick}) => {
    const [user, setUser] = useState('');
    const [passwd, setPasswd] = useState('');

    const inputUserHandler = ({target}) => setUser(target.value);
    const inputPasswdHandler = ({target}) => setPasswd(target.value);

    return <>
        <h1>REGISTRO</h1>
        <br></br>
        <label for="floatingInput">Nombre</label>
        <input class="form-control" type="text" name={user} onChange={inputUserHandler}></input>
        <br></br>
        <label for="floatingPassword">Contraseña</label>
        <input class="form-control" type="password" name={passwd} onChange={inputPasswdHandler}></input>
        <br></br>
        <button class="btn btn-lg btn-primary" onClick={() => onRegisterClick(user,passwd)}>Registrar</button>
    </>
}

export default Login;