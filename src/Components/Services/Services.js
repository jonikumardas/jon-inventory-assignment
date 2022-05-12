import React from 'react';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';

const Services = props => {
    const { picture, balance, name, company,address } = props.product;

    return (
        <div className="col-md-4">
    <div className='my-5 text-white'>
                <Card style={{  background: "#130f40", width: '19rem', height:'427px' }}>
  <Card.Img variant="top" src={picture} />
  <Card.Body>
  <Card.Title>{name}</Card.Title>
    <Card.Text>
      {address}
    </Card.Text>
  </Card.Body>
  <ListGroup className="list-group-flush" style={{ background:'#0652DD', color:'white'}}>
 <ListGroupItem>Company:{company}</ListGroupItem>
   <ListGroupItem>Balance:{balance}</ListGroupItem>
  </ListGroup>
                </Card>
                </div>
    
    </div>
   
 );
};

export default Services;