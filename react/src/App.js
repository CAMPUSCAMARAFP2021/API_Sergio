import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import OfferList from './components/OfferList';
import Container from 'react-bootstrap/Container';
import Register from './components/Register';
import { register } from './api/Users';
import { useState } from 'react';
import logo from './logo.png';
import LogOutButton from './components/LogOutButton';
const App = () =>{
  const [jwt, setJwt] = useState(false);
 
  const onRegisterClick = (user, passwd) => {
    register(user,passwd)
     .then((jwt)=> setJwt(jwt))
     .catch((error) => console.log('falla'))
  }
   
  return <Container className="p-3">
     <Container className="p-5 mb-4 bg-light rounded-3">
       <img class="mb-4" width="170" height="110" src={logo}></img>
       {jwt ? <>
         <LogOutButton onLogOut={() => setJwt(false)}></LogOutButton>
         <OfferList jwt={jwt} />
       </> : 
       <Register onRegisterClick={onRegisterClick}/>}
     </Container>
   </Container> 
 }

export default App;