import React from 'react';
import { Button, Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const AllProduct = props => {
 
  const { picture, balance, name, company, address, about } = props.product;
  const navigate = useNavigate();
  const navigatetoOrder = products => {
    navigate(`/product/${products.name}`);
    
  }

    return (
        <div className="col-md-4 ">
    <div className='my-5'>
                <Card style={{  background: "#130f40", color:"white", width: '19rem', height:'630px' }}>
  <Card.Img variant="top" src={picture} />
  <Card.Body>
  <Card.Title>{name}</Card.Title>
    <Card.Text>
      {address}
    </Card.Text>
    <Card.Text>
      {about}
    </Card.Text>
  </Card.Body>
  <ListGroup className="list-group-flush">
 <ListGroupItem>Company:{company}</ListGroupItem>
   <ListGroupItem>Balance:{balance}</ListGroupItem>
  </ListGroup>
 </Card>
          <Button className='text-white btn mt-2' style={{ background: '#130f40' }} onClick={()=>navigatetoOrder(props.product)}>Book Now</Button>
            
   </div>
    
    </div>
    );
};

export default AllProduct;