import React from 'react';
import { Button, Form } from 'react-bootstrap';

const Addproduct = () => {
  const eventHandel = event => {
    event.preventDefault()
    const name = event.target.name.value;
    const balance = event.target.balance.value;
    const picture = event.target.picture.value;
    console.log(name, balance, picture);
    const url = 'https://afternoon-bayou-59654.herokuapp.com/upload';
    fetch(url, {
      method: 'POST',
      body: JSON.stringify({
        name, balance, picture
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
    event.target.reset();
    alert("product add successfull");
  }
  
    return (
        <div className='container-fluid'>
           
            <Form onSubmit={eventHandel} className="w-50 mx-auto">
                  <h3 className="text-center">add product</h3>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Product name</Form.Label>
          <Form.Control type="text" name="name" placeholder="product name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Product balance</Form.Label>
          <Form.Control type="text" name="balance" placeholder="balance" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Image link</Form.Label>
          <Form.Control type="text" name="picture" placeholder="product image link" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="all is right " />
        </Form.Group>
        <Button variant="primary" type="submit">
        Add Product
        </Button>
      </Form>
              </div>
          );
};

export default Addproduct;