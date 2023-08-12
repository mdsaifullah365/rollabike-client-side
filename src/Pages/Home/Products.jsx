import axios from 'axios';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import ProductCard from './ProductCard';

const Products = () => {
  const { data: products, isLoading } = useQuery('products', () =>
    axios.get('/api/v1/product')
  );
  if (isLoading) {
    return <Loading />;
  }
  return (
    <section className='container mx-auto my-28'>
      <div className='text-5xl text-center text-base-100 mb-16 uppercase'>
        RollaBike <span className='text-primary'>Parts</span>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
        {products?.data.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default Products;
