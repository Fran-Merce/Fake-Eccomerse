
import { bestSellersProducts } from '../../data/bestSellers';
import { reccomendedProducts } from '../../data/remmended';
import { Categories } from './components/Categories/Categories';
import { Hero } from './components/Hero/Hero';
import { ProductsHome } from './components/ProductsHome/ProductsHome';


const HomePage = () => {
  return (
    <>
      <Hero />
      <Categories />
      <ProductsHome title={'Mas Vendidos'} data={bestSellersProducts} />
      <ProductsHome title={'Nuevos Lanzamientos'} data={reccomendedProducts} />
    </>
  );
};
export default HomePage;
