import { Link, Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar.jsx';

const Home = () => {
  return (
    <>
      <Navbar />
      <section className='section'>
        <Outlet />
      </section>
    </>
  );
};
export default Home;
