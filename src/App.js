import { BrowserRouter, Route, Routes } from 'react-router';
import Login from './React/Page/Login'
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './React/Page/Home';
import DetailProduct from './React/Compoment/DetailProduct';
import Cart from './React/Page/Cart';
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />}></Route>
          <Route path='/home' element={<Home />}></Route>
          <Route path='/detail/:id' element={<DetailProduct />}></Route>
          <Route path='/cart' element={<Cart />}></Route>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
