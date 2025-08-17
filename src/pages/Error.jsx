import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <section className='section'>
      <h2>404</h2>
      <span>Page not Found</span>
      <Link to='/' className='btn'>
        back to home
      </Link>
    </section>
  );
};
export default Error;
