import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Products from './pages/Products.jsx';
import Error from './pages/Error.jsx';
import { Fragment } from 'react';

function App() {
  return (
    <Fragment>
      <nav>Navbar</nav>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='products' element={<Products />} />
        <Route path='*' element={<Error />} />
      </Routes>
      <footer>footer</footer>
    </Fragment>
  );
}

export default App;
