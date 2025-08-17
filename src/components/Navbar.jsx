import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='navbar'>
      <Link to='/' className='btn'>
        Home
      </Link>
      <Link to='/about' className='btn'>
        About
      </Link>
      <Link to='/products' className='btn'>
        products
      </Link>
    </nav>
  );
};

export default Navbar;
