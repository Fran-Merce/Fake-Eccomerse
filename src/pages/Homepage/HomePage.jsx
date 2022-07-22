import { Footer } from '../../components/Footer/Footer';
import { SubscribeNewsletter } from '../../components/UI/SubscribeNesletter/SubscribeNewsletter';
import { Categories } from './components/Categories/Categories';
import { Hero } from './components/Hero/Hero';
import { ProductsHome } from './components/ProductsHome/ProductsHome';

const HomePage = () => {
  return (
    <>
      <Hero />
      <Categories />
      <ProductsHome title={'BestSeller'} />
      <ProductsHome title={'Recommended'} />

      <SubscribeNewsletter />
      <Footer />
    </>
  );
};
export default HomePage;
