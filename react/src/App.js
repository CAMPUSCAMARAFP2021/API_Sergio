import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import OfferList from './components/OfferList';
import Container from 'react-bootstrap/Container';
import Login from './components/Login';
import { login } from './api/Users';
import { useState } from 'react';
import LogOutButton from './components/LogOutButton';
const App = () =>{
  const [jwt, setJwt] = useState(false);
 
  const onLoginClick = (user, passwd) => {
    login(user,passwd)
     .then((jwt)=> setJwt(jwt))
     .catch((error) => console.log('falla'))
  }
   
  return <Container className="p-3">
     <Container className="p-5 mb-4 bg-light rounded-3">
       <h1 className="header">Welcome to TitoJobs</h1>
       {jwt ? <>
         <LogOutButton onLogOut={() => setJwt(false)}></LogOutButton>
         <OfferList jwt={jwt} />
       </> : 
       <Login onLoginClick={onLoginClick}/>}
     </Container>
   </Container> 
 }

export default App;