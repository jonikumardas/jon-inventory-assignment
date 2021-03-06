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
import Blog from './Components/Blog/Blog';
import Requirauth from './Components/RequerAuth/Requirauth';

function App() {
  return (
    <div>
      <Navber></Navber>
      <Routes>
        <Route path='/' element={<Slider></Slider>}></Route>
        <Route path='/home' element={<Slider></Slider>}></Route>
        <Route path='/product' element={<Product></Product>}></Route>
        <Route path='/product/:orderId' element={
          <Requirauth>
            <Order></Order>
              </Requirauth>
         }></Route>
        <Route path='/addproduct' element={
          <Requirauth>
            <Addproduct></Addproduct>
          </Requirauth>
          }></Route>
        <Route path='/updateproduct' element={
          <Requirauth>
            <h1>update page </h1>
          </Requirauth>
         }></Route>
        <Route path='/manageproduct' element={<Requirauth>
          <h1>manage page </h1>
        </Requirauth>}></Route>
        <Route path='/order' element={<Requirauth>
          <Order></Order>
        </Requirauth>}></Route>
        <Route path='/blogs' element={<Blog></Blog>}></Route>
        <Route path='/Login' element={<LogIn></LogIn>}></Route>
        <Route path='/registation' element={<Registaiton></Registaiton>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Fotter></Fotter>
      
    </div>
  );
}

export default App;
