import './App.css';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<h1>hello react home </h1>}></Route>
        <Route path='/home' element={<h1>hello react home </h1>}></Route>
        <Route path='/' element={<h1>hello react home1 </h1>}></Route>
        <Route path='/' element={<h1>hello react home 2</h1>}></Route>
        <Route path='/' element={<h1>hello react home 3</h1>}></Route>
        <Route path='/' element={<h1>hello react home 4</h1>}></Route>
        <Route path='/' element={<h1>hello react home 5</h1>}></Route>
        <Route path='/' element={<h1>hello react home 6</h1>}></Route>
        <Route path='/' element={<h1>hello react home 7</h1>}></Route>
        <Route path='*' element={<h1>hello react home 8</h1>}></Route>
      </Routes>
      
    </div>
  );
}

export default App;
