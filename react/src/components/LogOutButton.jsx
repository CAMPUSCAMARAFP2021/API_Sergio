import Button from 'react-bootstrap/Button';

const LogOutButton = ({onLogOut}) => 
  <Button class="w-100 btn btn-lg btn-primary boton" onClick={onLogOut}>logout</Button>
  
export default LogOutButton;