import { Link } from 'react-router-dom';
import products from '../data.js';

const Products = () => {
  return (
    <>
      <section className='section'>
        <h2>products</h2>
        <div className='products'>
          {products.map((product) => {
            return (
              <article key={product.id}>
                <h5>{product.name}</h5>
                <img src={product.image} alt={product.name} />
                <Link to={`/products/${product.id}`}>more info</Link>
              </article>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Products;
