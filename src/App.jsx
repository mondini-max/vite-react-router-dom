import './App.css';
import { Fragment } from 'react';
import { Routes, Route } from 'react-router-dom';
import About from './pages/About.jsx';
import Products from './pages/Products.jsx';
import Error from './pages/Error.jsx';
import SharedLayout from './pages/SharedLayout.jsx';
import Home from './pages/Home.jsx';
import SingleProduct from './pages/SingleProduct.jsx';

function App() {
  return (
    <Fragment>
      <Routes>
        <Route path='/' element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='products' element={<Products />} />
          <Route path='products/:productId' element={<SingleProduct />} />
          <Route path='*' element={<Error />} />
        </Route>
      </Routes>
    </Fragment>
  );
}

export default App;
