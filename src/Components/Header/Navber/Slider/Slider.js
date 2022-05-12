import React from 'react';
import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Extra from '../../../Extra/Extra';
import Hook from '../../../Hook/Hook';
import image from '../../../image/slider.png'
import image1 from '../../../image/slider2.jpg'
import image2 from '../../../image/slider3.jpg'
import Services from '../../../Services/Services';

const Slider = () => {
  // show products
  const [products] = Hook([]);
  if (products) {
    products.length = 6;
  }
    return (
        <div>
            <Carousel>
  <Carousel.Item interval={1000}>
    <img
      className="d-block w-100"
      src={image}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3 style={{color: "red"}}>SEARCH YOUR DREAM CAR</h3>
      <p>This is an expancive car smoth driving experince</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={500}>
    <img
      className="d-block w-100"
      src={image1} 
      alt="Second slide"
    />
    <Carousel.Caption>
      <h3 style={{color: "red"}}>Sports car</h3>
      <p>Top speed 350 the most adventures car </p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 h-50"
      src={image2}
      alt="Third slide"
    />
                    <Carousel.Caption >
      <h3 style={{color: "red"}} >Elictic Car </h3>
      <p>Best Speed for ever. fuil and charge both supported</p>
      </Carousel.Caption>
      </Carousel.Item>
        </Carousel>
        {/* service section has start  */}
        <div className='container-fluid mb-5 p-5 bg-black text-center '>
          <h1 className='text-white'>Our spacial services </h1>
          <h2 className='text-gray'>spacial stock {products.length}</h2>
          <div className="row justify-content-evenly">
          {
            products.map(product => <Services key={product._id}
            product={product}
            ></Services>)
            }
            </div>
          < Link to="/product" className='text-end text-white'> To see more...</Link>
        </div>
        {/* service section has end */}
        <Extra></Extra>

      </div>
      
    );
};

export default Slider;