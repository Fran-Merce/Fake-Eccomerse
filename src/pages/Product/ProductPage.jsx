import { useParams } from 'react-router-dom';
import { ProductCard } from '../../components/ProductCard/ProductCard';
import { products } from '../../data/products';
import { NotFoundPage } from '../NotFound/NotFoundPage';
const ProductPage = () => {
  const { id } = useParams();
  const productsFormatted = Object.values(products).flat();
  const product = productsFormatted.find(product => product.id === parseInt(id));

  if (!product) return <NotFoundPage />;

  return <ProductCard product={product} />;
};

export default ProductPage;
