import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navber from './Components/Header/Navber/Navber';
import 'bootstrap/dist/css/bootstrap.min.css';
import Slider from './Components/Header/Navber/Slider/Slider';
import Product from './Components/Product/Product';
import Order from './Components/Order/Order';
import Fotter from './Components/Fotter/Fotter';
import LogIn from './Components/LogIn/LogIn';
import Registaiton from './Components/Registation/Registaiton';
import NotFound from './Components/NotFound/NotFound';
import Addproduct from './Components/Addproduct/Addproduct';

function App() {
  return (
    <div>
      <Navber></Navber>
      <Routes>
        <Route path='/' element={<h1>hello react home </h1>}></Route>
        <Route path='/home' element={<Slider></Slider>}></Route>
        <Route path='/product' element={<Product></Product>}></Route>
        <Route path='/product/:orderId' element={<Order></Order>}></Route>
        <Route path='/addproduct' element={<Addproduct></Addproduct>}></Route>
        <Route path='/updateproduct' element={<h1>hello react home 3</h1>}></Route>
        <Route path='/manageproduct' element={<h1>hello react home 4</h1>}></Route>
        <Route path='/order' element={<h1>hello react home 5</h1>}></Route>
        <Route path='/blogs' element={<h1>hello react home 6</h1>}></Route>
        <Route path='/Login' element={<LogIn></LogIn>}></Route>
        <Route path='/registation' element={<Registaiton></Registaiton>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Fotter></Fotter>
      
    </div>
  );
}

export default App;
