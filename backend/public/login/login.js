import { login } from "../API/Login";

function onLoginClick(user,passwd){

    localStorage.setItem("jwt", result)
    console.log(localStorage.getItem('jwt'))
   login(user,passwd).then(location.href="../index.html")


   
   window.localStorage.setItem('jwt', res.json(result))

   window.location.replace("../home")
}