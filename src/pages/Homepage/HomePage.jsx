import { Footer } from '../../components/Footer/Footer';
import { SubscribeNewsletter } from '../../components/UI/SubscribeNesletter/SubscribeNewsletter';
import { bestSellersProducts } from '../../data/bestSellers';
import { reccomendedProducts } from '../../data/remmended';
import { Categories } from './components/Categories/Categories';
import { Hero } from './components/Hero/Hero';
import { ProductsHome } from './components/ProductsHome/ProductsHome';

const HomePage = () => {
  console.log('first');
  return (
    <>
      <Hero />
      <Categories />
      <ProductsHome title={'Mas Vendidos'} data={bestSellersProducts} />
      <ProductsHome title={'Recomendados'} data={reccomendedProducts} />

      <SubscribeNewsletter />
      <Footer />
    </>
  );
};
export default HomePage;
