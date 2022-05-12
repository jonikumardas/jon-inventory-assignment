import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navber from './Components/Header/Navber/Navber';
import 'bootstrap/dist/css/bootstrap.min.css';
import Slider from './Components/Header/Navber/Slider/Slider';
import Product from './Components/Product/Product';

function App() {
  return (
    <div>
      <Navber></Navber>
      <Routes>
        <Route path='/' element={<h1>hello react home </h1>}></Route>
        <Route path='/home' element={<Slider></Slider>}></Route>
        <Route path='/product' element={<Product></Product>}></Route>
        <Route path='/product/:orderId' element={<h1>hello react home1 </h1>}></Route>
        <Route path='/addproduct' element={<h1>hello react home 2</h1>}></Route>
        <Route path='/updateproduct' element={<h1>hello react home 3</h1>}></Route>
        <Route path='/manageproduct' element={<h1>hello react home 4</h1>}></Route>
        <Route path='/order' element={<h1>hello react home 5</h1>}></Route>
        <Route path='/blogs' element={<h1>hello react home 6</h1>}></Route>
        <Route path='/Login' element={<h1>hello react home 7</h1>}></Route>
        <Route path='/registation' element={<h1>hello react home 7</h1>}></Route>
        <Route path='*' element={<h1>hello react home 8</h1>}></Route>
      </Routes>
      
    </div>
  );
}

export default App;
