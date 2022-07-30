import { Footer } from '../../components/Footer/Footer';
import { bestSellersProducts } from '../../data/bestSellers';
import { reccomendedProducts } from '../../data/remmended';
import { Categories } from './components/Categories/Categories';
import { Hero } from './components/Hero/Hero';
import { ProductsHome } from './components/ProductsHome/ProductsHome';
import { useRedux, useReduxTypes } from '../../hooks/useRedux';
// import { reducers } from '../../redux/reducerNames';
const HomePage = () => {
  const { state: { currentUser } , dispatch} = useRedux(useReduxTypes.state);

  return (
    <>
      <Hero />
      <Categories />
      <ProductsHome title={'Mas Vendidos'} data={bestSellersProducts} />
      <ProductsHome title={'Recomendados'} data={reccomendedProducts} />

      <Footer />
    </>
  );
};
export default HomePage;
