import { AnimatePresence } from 'framer-motion';
import { useParams } from 'react-router-dom';
import { ProductCard } from '../../components/ProductCard/ProductCard';
import { products } from '../../data/products';
import { NotFoundPage } from '../NotFound/NotFoundPage';
import { ProductInfo } from './components/ProductInfo/ProductInfo';
import { ProductsGallery } from './components/ProductsGallery/ProductsGallery';
import { ProductPageStyled } from './ProductPageStyled';
const ProductPage = () => {
  const { id } = useParams();
  const productsFormatted = Object.values(products).flat();
  const product = productsFormatted.find(product => product.id === parseInt(id));

  if (!product) return <NotFoundPage />;
  const { images } = product;

  return (
    <AnimatePresence>
      <ProductPageStyled
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <ProductsGallery images={images} />
        <ProductInfo product={product} />
      </ProductPageStyled>
    </AnimatePresence>
  );
};

export default ProductPage;
