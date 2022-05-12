import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Firebase/Firebase.init';
import logo from '../../image/log2.jpg'
    const Navber = () => {
        const [user] = useAuthState(auth);
        const handleSignOut = () =>{
          signOut(auth); 
        }
    return (
        <div>
        <Navbar collapseOnSelect expand="lg" style={{ background: "#130f40"}} variant="dark">
  <Container>
  <Navbar.Brand as={Link} to="/home"> <img src={logo} alt="" width="200"
          height="75" /></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
              <Nav.Link as={Link} to="/home">Home</Nav.Link>
      <Nav.Link as={Link} to="/product">Product</Nav.Link>
      <Nav.Link as={Link} to="/addproduct">Add Product</Nav.Link>
      <Nav.Link as={Link} to="/updateproduct">Update Product</Nav.Link>
      <Nav.Link as={Link} to="/manageproduct">Manage Product</Nav.Link>
      <Nav.Link as={Link} to="/order">Order</Nav.Link>
      <Nav.Link as={Link} to="/blogs">Blogs</Nav.Link>
    </Nav>
              <Nav>
                
              {
                user ?
                  <button className='text-white bg-black' onClick={handleSignOut}>Sign out</button>
                  :
                  <Nav.Link eventKey={2}as={Link} to="/login" className='text-gray'>Log In </Nav.Link>
              }
      
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
    );
};

export default Navber;