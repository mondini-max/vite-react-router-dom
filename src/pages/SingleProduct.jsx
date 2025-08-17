import { Link, useParams } from 'react-router-dom';

const SingleProduct = () => {
  const { productId } = useParams();
  return (
    <section className='section product'>
      <h3>{productId}</h3>
      <Link to={'/products'} className='btn'>
        back to Products
      </Link>
    </section>
  );
};

export default SingleProduct;
