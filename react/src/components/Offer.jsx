import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const Offer = ({ offer, onDelete}) =>  
    <Card style={{ width: '20rem' }}>
        <Card.Body>
            <Card.Title>{offer.name}</Card.Title>
            <Card.Title>{offer.salary}</Card.Title>
            <Card.Title>{offer.workday}</Card.Title>
            <Card.Title>{offer.agreement}</Card.Title>
            <Button variant="primary" onClick={onDelete}>Eliminar</Button>
        </Card.Body>
    </Card>

    
export default Offer;