import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const Offer = ({ offer, onDelete}) =>  
    <Card style={{ width: '20rem' }}>
        <Card.Body>
            <Card.Title>Nombre: {offer.name}</Card.Title>
            <Card.Title>Salario: {offer.salary}</Card.Title>
            <Card.Title>Contrato: {offer.workday}</Card.Title>
            <Button variant="primary" onClick={onDelete}>Eliminar</Button>
        </Card.Body>
    </Card>

    
export default Offer;