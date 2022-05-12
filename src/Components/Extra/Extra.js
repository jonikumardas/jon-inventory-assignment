import React from 'react';
import car from '../image/car-removebg-preview.png'
import money from '../image/money-removebg-preview.png';
import coustomer from '../image/coustomer-removebg-preview.png';

const Extra = () => {
    return (
        <div className='container-fluid bg-black text-white align-items-center'>
        <div className="row justify-content-evenly mb-3" style={{background:'rgba(3,44,88,255)'}}>
            <div className="col-md-3 pb-2">
                <img src={car} className="w-50" alt="" />
                <h2>
                2,000
                </h2>
                <p>
                Cars Sold
                </p>

            </div>
            <div className="col-md-3 pb-2">
                <img src={money} className="w-50" alt="" />
                <h2>
                $750,000

                </h2>
                <p>Amount Sold</p>

            </div>
            <div className="col-md-3 pb-2">
                <img src={coustomer} className="w-50" alt="" />
                <h2>
                100%
                </h2>
                <p>Customer Satisfaction</p>
            </div>
            </div>
            <h2 className='text-center'>contact us</h2>
            <div className="row justify-content-evenly mb-3 p-5" style={{background:'rgba(3,44,88,255)'}}>
                <div className="col-md-3 pb-2">
                <h3 className='text-info'> Newsletter </h3>
                    <p>By subscribing to our company newsletter you will always be up-to-date on our latest promotions, deals and vehicle inventory!</p>
                    <form className="d-flex">
                  <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                 <button className="btn bg-white" type="submit">Search</  button>
                 </form>

                </div>
                <div className="col-md-3 pb-2">
                    <h3 className='text-info'>Latest Tweets</h3>
                    <p> Put your tweet message here. Make it compelling to attract other @people to read and click on your http://links to your site. #hashtag</p>
                    <p>
                    Put your tweet message here. Make it compelling to attract other @people to read and click on your http://links to your site. #hashtag
                    </p>

                </div>
                <div className="col-md-3 pb-2">
                    <h3 className='text-info'>Contact Us</h3>
                    <h6>Address: 1234 Street Name, City Name, AB 12345</h6>
                    <h6>Phone:1-800-123-4567</h6>
                    <h6>Email:sales@company.com</h6>
                   

                </div>
            </div>
        
    </div>
    );
};

export default Extra;