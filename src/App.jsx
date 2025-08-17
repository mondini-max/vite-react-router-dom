import './App.css';
import { Routes, Route } from 'react-router-dom';
import About from './pages/About.jsx';
import Products from './pages/Products.jsx';
import Error from './pages/Error.jsx';
import { Fragment } from 'react';
import SharedLayout from './pages/SharedLayout.jsx';
import Home from './pages/Home.jsx';

function App() {
  return (
    <Fragment>
      <Routes>
        <Route path='/' element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='products' element={<Products />} />
          <Route path='*' element={<Error />} />
        </Route>
      </Routes>
    </Fragment>
  );
}

export default App;
