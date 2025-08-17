import { Link, Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar.jsx';
import StyledNavbar from '../components/StyledNavbar.jsx';

const SharedLayout = () => {
  return (
    <>
      <StyledNavbar />
      <Outlet />
    </>
  );
};
export default SharedLayout;
